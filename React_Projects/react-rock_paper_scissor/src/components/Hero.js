import React, { useState } from "react";
import { GiScissors, GiPaper, GiRock } from "react-icons/gi";
import { IoReload } from "react-icons/io5";
import { BsArrowReturnRight } from "react-icons/bs";
// import "../DarkMode.css";

const Hero = () => {
  const [rock1, setRock1] = useState(false);
  const [paper1, setPaper1] = useState(false);
  const [scissor1, setScissor1] = useState(false);
  const [rock2, setRock2] = useState(false);
  const [paper2, setPaper2] = useState(false);
  const [scissor2, setScissor2] = useState(false);

  const [player1option, setPlayer1Option] = useState("");
  const [player2option, setPlayer2Option] = useState("");

  const handlerock1 = (e) => {
    e.preventDefault();
    setRock1(true);
    // setRock2(false);
    setPaper1(false);
    // setPaper2(false);
    setScissor1(false);
    // setScissor2(false);
    setPlayer1Option("ROCK");
  };
  const handlerock2 = (e) => {
    e.preventDefault();
    // setRock1(false);
    setRock2(true);
    // setPaper1(false);
    setPaper2(false);
    // setScissor1(false);
    setScissor2(false);
    setPlayer2Option("ROCK");
  };
  const handlepaper1 = (e) => {
    e.preventDefault();
    setRock1(false);
    // setRock2(false);
    setPaper1(true);
    // setPaper2(false);
    setScissor1(false);
    // setScissor2(false);
    setPlayer1Option("PAPER");
  };
  const handlepaper2 = (e) => {
    e.preventDefault();
    // setRock1(false);
    setRock2(false);
    // setPaper1(false);
    setPaper2(true);
    // setScissor1(false);
    setScissor2(false);
    setPlayer2Option("PAPER");
  };
  const handlescissor1 = (e) => {
    e.preventDefault();
    setRock1(false);
    // setRock2(false);
    setPaper1(false);
    // setPaper2(false);
    setScissor1(true);
    // setScissor2(false);
    setPlayer1Option("SCISSOR");
  };
  const handlescissor2 = (e) => {
    e.preventDefault();
    // setRock1(false);
    setRock2(false);
    // setPaper1(false);
    setPaper2(false);
    // setScissor1(false);
    setScissor2(true);
    setPlayer2Option("SCISSOR");
  };

  const [playerres, setPlayerRes] = useState("");
  // const [player2,setPlayer2]=useState("");

  const [res, setRes] = useState(0);

  const handlelogic = () => {
    setReload(true);
    if (!rock1 && !paper1 && !scissor1 && !rock2 && !scissor2 & !paper2) {
      console.log("plz select BOTH options");
      setPlayerRes("No Options Selected");
      setRes(1);
      return;
    }
    if (!rock1 && !paper1 && !scissor1) {
      console.log("plz select Player 1 options");
      setPlayerRes("No Player 1 option Selected");
      setRes(1);
      return;
    }
    if (!rock2 && !scissor2 & !paper2) {
      console.log("plz select Player 2 options");
      setPlayerRes("No Player 2 option Selected");
      setRes(1);
      return;
    }
    if (rock1 === true && rock2 === true) {
      console.log("DRAW");
      setPlayerRes("GAME IS DRAWN");
      setRes(1);
      // setPlayer1("GAME");
    } else if (paper1 && paper2) {
      console.log("DRAW");
      setPlayerRes("GAME IS DRAWN");
      setRes(1);
    } else if (scissor1 && scissor2) {
      console.log("DRAW");
      setPlayerRes("GAME IS DRAWN");
      setRes(1);
    } else if (rock1 && paper2) {
      console.log("PAPER 2 won");
      setPlayerRes("PLAYER 2");
      setRes(2);
    } else if (paper1 && rock2) {
      console.log("PAPER 1 won");
      setPlayerRes("PLAYER 1");
      setRes(2);
    } else if (paper1 && scissor2) {
      console.log("SCISSOR 2 won");
      setPlayerRes("PLAYER 2");
      setRes(2);
    } else if (scissor1 && paper2) {
      console.log("SCISSOR 1 won");
      setPlayerRes("PLAYER 1");
      setRes(2);
    } else if (rock1 && scissor2) {
      console.log("ROCK 1 won");
      setPlayerRes("PLAYER 1");
      setRes(2);
    } else if (scissor1 && rock2) {
      console.log("ROCK 2 won");
      setPlayerRes("PLAYER 2");
      setRes(2);
    }
    console.log("GAME ENDED");
    // setRes(true);
    // setRes(2);
  };
  const [reload, setReload] = useState(false);
  const handlereload = () => {
    setPaper1(false);
    setPaper2(false);
    setRock1(false);
    setRock2(false);
    setScissor1(false);
    setScissor2(false);
    setPlayer1Option("");
    setPlayer2Option("");
    setPlayerRes("");
    setRes(0);
    setReload(false);
  };
//   const [theme, setTheme] = useState("light");
//   const toggleTheme = () => {
//     if (theme === "light") {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   };
//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);
  return (
    <>
    {/* <button
    className="text-red-300 mt-0 mr-20 float-right font-bold text-5xl"
    onClick={toggleTheme}          
    >
    <BsFillSunFill/>     
    </button> */}
    {/* <div className={`Hero ${theme}`}> */}
        <div className="flex flex-row justify-center mt-10">
            <div className="flex flex-col align-middle">
            <div className="mx-10 mt-10 mb-3 text-yellow-800 text-2xl font-bold">
                PLAYER 1
            </div>
            <div className="mx-10 flex flex-row gap-5">
                <button
                onClick={handlerock1}
                className="bg-red-500 px-2 focus:outline-none focus:ring-2 focus:ring-opacity-100 focus:ring-purple-900 text-8xl visited:ring-2 visited:outline-none visited:ring-opacity-100 visited:ring-purple-900"
                >
                <GiRock />
                </button>
                <button
                onClick={handlepaper1}
                className="bg-yellow-500 px-2 focus:outline-none focus:ring-2 focus:ring-opacity-100 focus:ring-purple-900 text-8xl visited:ring-2 visited:outline-none visited:ring-opacity-100 visited:ring-purple-900"
                >
                <GiPaper />
                </button>
                <button
                onClick={handlescissor1}
                className="bg-orange-500 px-2 focus:outline-none focus:ring-2 focus:ring-opacity-100 focus:ring-purple-900 text-8xl visited:ring-2 visited:outline-none visited:ring-opacity-100 visited:ring-purple-900"
                >
                <GiScissors />
                </button>
            </div>
            <p className="mt-4 mx-20 text-3xl text-gray-500 font-extrabold">
                {player1option}
            </p>
            </div>
            <div className="flex flex-col align-middle">
            <div className="mx-10 mt-10 mb-3 text-orange-800 text-2xl font-bold">
                PLAYER 2
            </div>
            <div className="mx-10 flex flex-row gap-5">
                <button
                onClick={handlerock2}
                className="bg-red-500 px-2 focus:outline-none focus:ring-2 focus:ring-opacity-100 focus:ring-purple-900 text-8xl visited:ring-2 visited:outline-none visited:ring-opacity-100 visited:ring-purple-900"
                >
                <GiRock />
                </button>
                <button
                onClick={handlepaper2}
                className="bg-yellow-500 px-2 focus:outline-none focus:ring-2 focus:ring-opacity-100 focus:ring-purple-900 text-8xl visited:outline-none visited:ring-opacity-100 visited:ring-purple-900"
                >
                <GiPaper />
                </button>
                <button
                onClick={handlescissor2}
                className="bg-orange-500 px-2 focus:outline-none focus:ring-2 focus:ring-opacity-100 focus:ring-purple-900 text-8xl visited:outline-none visited:ring-opacity-100 visited:ring-purple-900"
                >
                <GiScissors />
                </button>
            </div>
            <p className="mt-4 mx-20 text-3xl text-gray-500 font-extrabold">
                {player2option}
            </p>
            </div>
        </div>
        <div className="flex flex-row justify-center">
            <button
            onClick={handlelogic}
            className="bg-green-600 mt-16 p-6 text-4xl rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-100 focus:ring-purple-900"
            >
            <BsArrowReturnRight />
            </button>
            {reload && (
            <>
                <button
                onClick={handlereload}
                className="bg-red-600 mt-16 ml-20 p-6 text-4xl rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-100 focus:ring-purple-900"
                >
                <IoReload />
                </button>
            </>
            )}
        </div>
        <div className="flex flex-row justify-center mt-5">
            {(res === 1 || res === 2) && (
            <>
                {res === 1 && (
                <>
                    <p className="font-bold text-5xl text-sky-900 mt-10">
                    <span className="text-black">"{playerres}"</span>
                    </p>
                </>
                )}
                {res === 2 && (
                <>
                    <p className="font-bold text-5xl text-pink-500 mt-10">
                    Game is WON by :-
                    <span className="text-black">"{playerres}"</span>
                    </p>
                </>
                )}
            </>
            )}
        </div>
      {/* </div> */}
    </>
  );
};

export default Hero;
