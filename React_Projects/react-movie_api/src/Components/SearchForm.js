import React, { createContext, useRef, useState, useEffect } from "react";
import { BiSend } from "react-icons/bi";
import Axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
// useNavigate
export const MyContext = createContext();

const SearchForm = () => {
  const ref = useRef(null);
  const ref3 = useRef(null);
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  //   const [inputImg, setInputImg] = useState(null);
  const [details, setDetails] = useState({});
  const [movielist, SetMovieList] = useState(false);
  const [moviedetails, SetMovieDetails] = useState({});

  const handleinput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    //Lifecycle event :- When component Firstly Mounts/Renders first time only...it will not work when the component Re-renders

    const movielistarray = [
      "money",
      "abcd",
      "lord",
      "why",
      "hello",
      "okay",
      "city",
      "yes",
      "why","hey","dear","india"
    ];

    const randommovie =
      movielistarray[Math.floor(Math.random() * movielistarray.length)];
      console.log(randommovie);

    const moviefxn = async () => {
      const responsePage = await Axios.get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=404a2bb7&s=${randommovie}`
      );

      const results = responsePage?.data?.totalResults-70;
      console.log(results);
      let pagenum = Math.floor(Math.random()*5);
      console.log(pagenum);
      pagenum++;

      const finalresponse = await Axios.get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=404a2bb7&s=${randommovie}&page=${pagenum}`
      );

      const finalresults = finalresponse?.data?.Search;

      console.log(finalresults[0]?.Title);

      SetMovieDetails(finalresults);
      SetMovieList(true);
    };
    moviefxn();
  },[]);

  const handlemovielistdetail=async(e)=>{

    console.log(e.target.innerHTML.toLowerCase());
    const textfrommovielist=e.target.innerHTML.toLowerCase();

    const response = await Axios.get(
      ` https://www.omdbapi.com/?i=tt3896198&apikey=404a2bb7&t=${textfrommovielist}`
    );

    const details = response.data;

    setDetails(details);
    SetMovieList(false);

    navigate("movie/moviemoredetails");
  }

  const handlesubmit = async () => {
    // e.preventDefault();

    const response = await Axios.get(
      ` https://www.omdbapi.com/?i=tt3896198&apikey=404a2bb7&t=${input}`
    );

    // const image = await Axios.get(`http://img.omdbapi.com/?apikey=404a2bb7&t=${input}`);

    // const imgdata=image.data;
    // console.log(imgdata);
    // console.log(image);

    // const navigate=useNavigate();
    // const notify = () => {
    //   toast("Default Notification !");

    //   toast.success("Success Notification !", {
    //     position: toast.POSITION.TOP_CENTER
    //   });

    //   toast.error("Error Notification !", {
    //     position: toast.POSITION.TOP_LEFT
    //   });

    //   toast.warn("Warning Notification !", {
    //     position: toast.POSITION.BOTTOM_LEFT
    //   });

    //   toast.info("Info Notification !", {
    //     position: toast.POSITION.BOTTOM_CENTER
    //   });

    //   toast("Custom Style Notification with css class!", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    //     className: 'foo-bar'
    //   });
    // };

    const details = response.data;
    console.log(details);

    if (!input) {
      // alert("Please enter Movie Name");
      // notify();
      // const notify = () => {

      // toast("Default Notification !");

      toast.warn("Please Enter Movie/Series Name !", {
        position: toast.POSITION.TOP_LEFT,
        // theme:"dark",
      });

      // }
      // notify();
      return navigate("/");
    }
    if (details.Error === "Movie not found!") {
      // alert("No Movie Found..Search some other Movie");
      setInput("");
      toast.error("Please Enter Some OTHER Movie/Series Name !", {
        position: toast.POSITION.TOP_LEFT,
        // theme:"dark",
      });
      return navigate("/");
    }
    window.onload = function () {
      window.location = "/";
    };

    console.log(details);

    setDetails(details);
    SetMovieList(false);

    navigate("/movie");
    ref.current?.scrollIntoView({ behavior: "smooth" });
    // setInput("");
  };

  return (
    <MyContext.Provider value={{ details,moviedetails,SetMovieList,ref3 }}>
      <div ref={ref3} className="mt-20 flex flex-row justify-center gap-3">
        <input
          className="rounded-md p-3 w-80 text-cyan-800"
          type="text"
          placeholder="Enter Movie/Series Name"
          value={input}
          onChange={handleinput}
          onKeyDown={(e) => {
            e.key === "Enter" && handlesubmit();
          }}
        />
        <button
          className="rounded-md p-3 text-2xl bg-blue-200 hover:cursor-pointer hover:scale-95"
          onClick={handlesubmit}
        >
          <BiSend />
        </button>
      </div>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
        // rtl={false}
        // theme="light"
      />
      <div className="flex flex-wrap flex-row mt-10 gap-4 justify-evenly">
        {movielist && (
          <>
            {moviedetails.map((each) => {
              return (
                
                <div key={each?.imdbID} className=" mb-32 flex flex-col gap-2 items-center">
                  <img
                    alt="Movie Poster"
                    src={each?.Poster}
                    className="rounded-2xl hover:cursor-pointer"
                    // onClick={handlemovielistdetail}
                  >                    
                  </img>
                  <p 
                    onClick={handlemovielistdetail} 
                    className="bg-gray-300 hover:scale-95 hover:cursor-pointer rounded-lg p-3 mt-5 text-4xl text-black font-semibold">
                    {each.Title}                    
                  </p>
                </div>
                
              );
            })}
          </>
        )}
      </div>
      <div ref={ref}>
        <Outlet></Outlet>
      </div>
    </MyContext.Provider>
  );
};

export default SearchForm;
