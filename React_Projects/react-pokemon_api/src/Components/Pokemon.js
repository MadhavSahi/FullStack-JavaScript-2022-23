import React from "react";
// import Axios from 'axios';

const Pokemon = ({ details }) => {
  // const x=details?.id;
  // console.log(details?.id);
  // console.log(details?.id);
  const pokemonname = (details?.name).toUpperCase();
  // const pokemonname2=pokemonname.toUpperCase();
  return (
    <>
      <div className="mt-10">
        <div className=" rounded-2xl flex flex-col items-center">
          <img
            className="w-1/4 hover:cursor-pointer hover:scale-95 hover:bg-gray-300 bg-gray-100 rounded-2xl"
            alt="pokemon"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${details?.id}.png`}//when using image src in JSX...follow this syntax
          />

          <div className="mt-10 w-9/12 rounded-2xl h-full pb-5 border-black bg-white text-2xl text-black flex flex-col">
            <p className="mt-10 bg-cyan-400 py-2 flex flex-row justify-center hover:scale-90 hover:cursor-pointer text-4xl text-black font-medium">
              {pokemonname}
            </p>

            <div className="bg-gray-400 mt-10 flex flex-row justify-evenly">
              <p>Ability 1</p>
              <p>{details?.abilities?.[0]?.ability?.name.toUpperCase()}</p>
            </div>
            <div className="bg-gray-400 mt-10 flex flex-row justify-evenly">
              <p>Ability 2</p>
              <p>{details?.abilities?.[1]?.ability?.name.toUpperCase()}</p>
            </div>
            <div className="bg-gray-400 mt-10 flex flex-row justify-evenly">
              <p>{details?.stats?.[0]?.stat?.name}</p>
              <p>{details?.stats?.[0]?.base_stat}</p>
            </div>
            <div className="bg-gray-400 mt-10 flex flex-row justify-evenly">
              <p>{details?.stats?.[1]?.stat?.name}</p>
              <p>{details?.stats?.[1]?.base_stat}</p>
            </div>
            <div className="bg-gray-400 mt-10 flex flex-row justify-evenly">
              <p>{details?.stats?.[2]?.stat?.name}</p>
              <p>{details?.stats?.[2]?.base_stat}</p>
            </div>
            <div className="bg-gray-400 mt-10 flex flex-row justify-evenly">
              <p>{details?.stats?.[3]?.stat?.name}</p>
              <p>{details?.stats?.[3]?.base_stat}</p>
            </div>
            <div className="bg-gray-400 mt-10 flex flex-row justify-evenly">
              <p>{details?.stats?.[4]?.stat?.name}</p>
              <p>{details?.stats?.[4]?.base_stat}</p>
            </div>
            <div className="bg-gray-400 mt-10 flex flex-row justify-evenly">
              <p>{details?.stats?.[5]?.stat?.name}</p>
              <p>{details?.stats?.[5]?.base_stat}</p>
            </div>
            <div className="bg-gray-400 mt-10 flex flex-row justify-evenly">
              <p>Height</p>
              <p>{details?.height}</p>
            </div>
            <div className="bg-gray-400 mt-10 flex flex-row justify-evenly">
              <p>Weight</p>
              <p>{details?.weight}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
