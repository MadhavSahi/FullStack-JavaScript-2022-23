import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";


const Header = () => {
  // const ThisCompContext=useContext(UserContext);
  const ThisCompContext = useContext(UserContext);
  const navigate=useNavigate();

  const handleLogOut=()=>{
    ThisCompContext.SetUser(null);
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-row justify-between bg-black">
        <p className="mt-3 text-blue-300 text-2xl">
          <Link to="/">GitHub App using Firebase</Link>
        </p>
        <p className="text-white mt-5 text-2xl">
          {ThisCompContext?.user ? "Hey: "+ThisCompContext?.user?.email : "Hey Anonymous ! Please SignUp/LogIn"}
        </p>
        <div className="flex flex-row justify-center mr-10 p-2 gap-5">
          {ThisCompContext?.user ? (
            <button
            onClick={handleLogOut}
            className="bg-white p-2 rounded-md text-cyan-700 hover:scale-95">
              {/* <Link to="/">LogOut</Link> */}
              LogOut
            </button>
          ) : (
            <>
              <button className="bg-white p-2 rounded-md hover:scale-95 text-cyan-700">
                <Link to="/SignUp">SignUp</Link>
              </button>

              <button className="bg-white p-2 rounded-md text-cyan-700 hover:scale-95">
                <Link to="/LogIn">LogIn</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
