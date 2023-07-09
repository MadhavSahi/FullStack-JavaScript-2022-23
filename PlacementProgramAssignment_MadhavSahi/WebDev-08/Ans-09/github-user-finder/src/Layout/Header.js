import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
      <div className="flex flex-row justify-between bg-black">
        <p className="mt-3 text-blue-300 text-2xl ml-10">
          <Link to="/">GitHub User Finder App by Madhav Sahi</Link>
        </p>
        <p className="text-white mt-5 text-2xl mr-10">
            MADHAV SAHI
         </p>
       </div>
    </>
  );
};

export default Header;
