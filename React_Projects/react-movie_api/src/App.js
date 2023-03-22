import React from "react";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import SearchForm from "./Components/SearchForm";
import MovieMoreDetails from "./Components/MovieMoreDetails";
import ErrorPage from "./Components/ErrorPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<><Home/><SearchForm/></>}>
          <Route path="/movie" element={<MovieDetails />} >
            <Route path="moviemoredetails" element={<MovieMoreDetails/>} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </>
  );
};

export default App;
