import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import { MyContext2 } from "./MovieDetails";
// import MovieDetails from "./MovieDetails";
import { MyContext } from "./SearchForm";
import {FaHome} from 'react-icons/fa';

const MovieMoreDetails = () => {
  const navigate=useNavigate();
  const { details,SetMovieList,ref3 } = useContext(MyContext);
  // const { moviedetails } = useContext(MyContext);
  const typemors = details.Type;
  console.log(typemors);

  const { ref2 } = useContext(MyContext2);

  window.onload = function () {
    window.location = "/";
  };

  const handleless=()=>{
    navigate("/movie");
    ref2.current?.scrollIntoView({ behavior:  "smooth" });
  }
  const handlehome=()=>{
    SetMovieList(true);
    navigate("/");
    ref3.current?.scrollIntoView({ behavior: "smooth" });
    // ref2.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {typemors === "movie" && (
        <div className="flex flex-row justify-evenly bg-white rounded-2xl text-black ml-60 mr-60">
          <div className=" mt-5 mb-5 gap-2 text-2xl text-gray-800 font-bold flex flex-col items-center">
            <p className="">Released On</p>
            <p>Genre</p>
            <p>Type</p>
            <p>Actors</p>
            <p>Director</p>
            <p>Writer</p>
            <p>Language</p>
            <p>Country</p>
            <p>IMDB Rating</p>
            <p>BoxOffice Collection</p>
            <p>Awards</p>
            <p>Runtime</p>
          </div>

          <div className="mt-5 mb-5 gap-2 text-2xl font-semibold flex flex-col items-center">
            <p>{details.Released}</p>
            <p>{details.Genre}</p>
            <p>{details?.Type?.toUpperCase()}</p>
            <p>{details.Actors}</p>
            <p>{details.Director}</p>
            <p>{details.Writer}</p>
            <p>{details.Language}</p>
            <p>{details.Country}</p>
            <p>{details.imdbRating} ⭐</p>
            <p>{details.BoxOffice}</p>
            <p>{details.Awards}</p>
            <p>{details.Runtime}</p>
          </div>
        </div>
      )}

      {typemors === "series" && (
        <div className="flex flex-row justify-evenly bg-white rounded-2xl text-black ml-60 mr-60">
          <div className="mt-5 mb-5 gap-2 text-2xl font-bold text-black flex flex-col items-center">
            <p>Released On</p>
            <p>Genre</p>
            <p>Type</p>
            <p>Actors</p>
            {/* <p>Director</p> */}
            <p>Writer</p>
            <p>Language</p>
            <p>Country</p>
            <p>IMDB Rating</p>
            {/* <p>BoxOffice Collection</p> */}
            <p>Total Seasons</p>
            <p>Awards</p>
            <p>Runtime</p>
          </div>

          <div className="mt-5 mb-5 gap-2 text-2xl font-semibold flex flex-col items-center">
            <p>{details.Released}</p>
            <p>{details.Genre}</p>
            <p>{details?.Type?.toUpperCase()}</p>
            <p>{details.Actors}</p>
            {/* <p>{details.Director}</p> */}
            <p>{details.Writer}</p>
            <p>{details.Language}</p>
            <p>{details.Country}</p>
            <p>{details.imdbRating} ⭐</p>
            {/* <p>{details.BoxOffice}</p> */}
            <p>{details.totalSeasons}</p>
            <p>{details.Awards}</p>
            <p>{details.Runtime}</p>
          </div>
        </div>
      )}
      <div className="flex flex-row justify-center text-md text-blue-600 font-semibold mt-5">
      <button 
      onClick={handleless}
      className="bg-white text-2xl p-2 hover:scale-95 rounded-lg">
        LESS
      </button>
      <button 
      onClick={handlehome}
      className="bg-white text-2xl p-2 ml-10 hover:scale-95 rounded-lg">
        <FaHome/>
      </button>
      </div>
      {/* <ToastContainer></ToastContainer> */}
    </>
  );
};

export default MovieMoreDetails;
