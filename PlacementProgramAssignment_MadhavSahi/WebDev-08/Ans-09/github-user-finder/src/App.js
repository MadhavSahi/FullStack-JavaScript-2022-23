import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home"
import PageNotFound from "./Pages/PageNotFound"
import Footer from './Layout/Footer';
import Header from './Layout/Header';

const App = () => {

  return (
    <>
      <Router>
        <ToastContainer/>
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='*' element={<PageNotFound/>} />
          </Routes>
          <Footer/>
      </Router>
    </>
  );
};

export default App;