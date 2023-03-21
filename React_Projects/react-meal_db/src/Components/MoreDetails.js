import React, { useContext } from "react";
import { MyContext } from "./Hero";

const MoreDetails = () => {
  const { details } = useContext(MyContext);
  //   const x="1";
  // console.log(details.strIngredient+{x});
  const ingredients = [];
  // for(let i=1;i<=20;i++){
  if (details.strIngredient1 !== "") {
    ingredients.push(details.strIngredient1);
  }
  if (details.strIngredient2 !== "") {
    ingredients.push(details.strIngredient2);
  }
  if (details.strIngredient3 !== "") {
    ingredients.push(details.strIngredient3);
  }
  if (details.strIngredient4 !== "") {
    ingredients.push(details.strIngredient4);
  }
  if (details.strIngredient5 !== "") {
    ingredients.push(details.strIngredient5);
  }
  if (details.strIngredient6 !== "") {
    ingredients.push(details.strIngredient6);
  }
  if (details.strIngredient7 !== "") {
    ingredients.push(details.strIngredient7);
  }
  if (details.strIngredient8 !== "") {
    ingredients.push(details.strIngredient8);
  }
  if (details.strIngredient9 !== "") {
    ingredients.push(details.strIngredient9);
  }
  if (details.strIngredient10 !== "") {
    ingredients.push(details.strIngredient10);
  }
  if (details.strIngredient11 !== "") {
    ingredients.push(details.strIngredient11);
  }
  if (details.strIngredient12 !== "") {
    ingredients.push(details.strIngredient12);
  }
  if (details.strIngredient13 !== "") {
    ingredients.push(details.strIngredient13);
  }
  if (details.strIngredient14 !== "") {
    ingredients.push(details.strIngredient14);
  }
  if (details.strIngredient15 !== "") {
    ingredients.push(details.strIngredient15);
  }
  if (details.strIngredient16 !== "") {
    ingredients.push(details.strIngredient17);
  }
  if (details.strIngredient18 !== "") {
    ingredients.push(details.strIngredient18);
  }
  if (details.strIngredient19 !== "") {
    ingredients.push(details.strIngredient19);
  }
  if (details.strIngredient20 !== "") {
    ingredients.push(details.strIngredient20);
  }
//   ingredients.toString();
//   const newstr = ingredients.join(', '); 
  // }
  console.log(ingredients);
  window.onload = function () {
    window.location = "/";
  }
  //   const x = 1;
  // const x="strIngredient1";
  return (
    <>
      <div className="">
        <div className="mt-10 bg-pink-600">
          <div className="mt-10 bg-gray-300 flex flex-row justify-around">
            <p className="text-3xl text-yellow-800">Dish Name :-</p>
            <p className="text-3xl font-serif text-black">{details.strMeal}</p>
          </div>
          <div className="mt-10 bg-gray-300 flex flex-row justify-around">
            <p className="text-3xl text-yellow-800">Country Origin :-</p>
            <p className="text-3xl font-serif text-black">{details.strArea}</p>
          </div>
          <div className="mt-10 bg-gray-300 flex flex-row justify-around">
            <p className="text-3xl text-yellow-800">Category of Dish :-</p>
            <p className="text-3xl font-serif text-black">
              {details.strCategory}
            </p>
          </div>
          <div className="mt-10 bg-gray-300 flex flex-row justify-around">
            <p className="text-3xl text-yellow-800">Ingredients Used :-</p>
            {/* <div className="text-2xl font-serif flex-wrap text-black">
              <p>{details?.strIngredient1},{details?.strIngredient2},</p>
              <p>{details?.strIngredient3},{details?.strIngredient4},</p>
              <p>{details?.strIngredient5},{details?.strIngredient6},</p>
              <p>{details?.strIngredient7},{details?.strIngredient8},</p>
              <p>{details?.strIngredient9},{details?.strIngredient10},</p>
              <p>{details?.strIngredient11},{details?.strIngredient12},</p>
              <p>{details?.strIngredient13},{details?.strIngredient14},</p>
              <p>{details?.strIngredient15},{details?.strIngredient16},</p>
              <p>{details?.strIngredient17},{details?.strIngredient18},</p>
              <p>{details?.strIngredient19},{details?.strIngredient20}</p>
            </div> */}
            <div className="text-2xl font-serif ml-32 text-black">
              {ingredients.map((ingredient) => {
                return (
                  <>
                    <p key={ingredient}>{ingredient}</p>
                  </>
                );
              })}
            </div>
            {/* <div className="text-2xl font-serif flex text-black"> */}
            {/* <p className="text-2xl font-serif text-black w-min">{newstr}</p> */}
            {/* </div> */}
          </div>
          <div className="mt-10 bg-gray-300 flex flex-row justify-around">
            <p className="text-3xl text-yellow-800">Recipee of Dish :-</p>
            <p className="text-2xl font-serif w-6/12 text-black">
              {details.strInstructions}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreDetails;
