import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import firebase from "firebase/app";
// import "firebase/auth";

import Home from "./Pages/Home"
import LogIn from "./Pages/LogIn"
import SignUp from "./Pages/SignUp"
import PageNotFound from "./Pages/PageNotFound"
import { UserContext } from './Context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';


// import FireBaseConfig from './Config/FireBaseConfig';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

//init firebase..it should be done only in main file..so that it is available right at the starting.

// Initialize Firebase
// const firebaseApp  = initializeApp(FireBaseConfig);
// const analytics = getAnalytics(app);

const App = () => {

  const [user,SetUser]=useState(null);

  return (
    <>
      <Router>
        <ToastContainer/>
        <UserContext.Provider value={{user,SetUser}}>
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/LogIn' element={<LogIn/>} />
            <Route exact path='/SignUp' element={<SignUp/>} />
            <Route exact path='*' element={<PageNotFound/>} />
          </Routes>
          <Footer/>
        </UserContext.Provider>
      </Router>
    </>
  );
};

export default App;