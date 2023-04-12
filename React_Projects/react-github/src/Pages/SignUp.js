import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../Config/FireBaseConfig"; //from documentation
import { UserContext } from "../Context/UserContext";
// import auth from "../Config/FireBaseConfig"

const SignUp = () => {

  // const navigate=useNavigate();

  const ThisCompContext = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(ThisCompContext.user);
        // .then is for when we are successfully getting the valid response
        console.log(response);
        ThisCompContext.SetUser({
          //we r getting the SetUser from Context and updating it here.
          email: response?.user?.email, //this user we r getting from response...don't confuse with our user.
          uid: response?.user?.uid,
        });
        
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, {
          type: "error",
          position: "top-left",
        });
      });
    };
    
    const HandleSubmit = (e) => {
      e.preventDefault();
      HandleSignUp();
      // navigate("/");
    };
    //the state is being updated after some time...so just checking here...and ya it's working...
  // console.log(ThisCompContext?.user);  
  if (ThisCompContext.user?.email) { //this is for if user comes to SignUp page after already signing up..it will redirect to home page
    return <Navigate to="/" />
  } 
  else {
    return (
      <>
        <main>
          <section>
            <div>
              <div className="mt-10 p-3 bg-cyan-400 flex flex-col items-center gap-10">
                <h1 className="text-red-900 font-medium text-3xl">
                  SignUp Form
                </h1>
                <form className="flex flex-col gap-4">
                  <div className="flex flex-row justify-between ">
                    <label className="text-xl" htmlFor="email-address">
                      Email address :
                    </label>
                    <input
                      className="ml-3 p-1"
                      type="email"
                      label="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email address"
                    />
                  </div>

                  <div className="flex flex-row justify-between">
                    <label className="text-xl" htmlFor="password">
                      Password :
                    </label>
                    <input
                      className="ml-3 p-1"
                      type="password"
                      label="Create password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter Password"
                    />
                  </div>

                  <button
                    className="ml-20 text-xl w-28 mt-5 bg-white border-2 rounded-md
                    hover:scale-95 hover:bg-black hover:text-white p-1"
                    type="submit"
                    onClick={HandleSubmit}
                  >
                    SUBMIT
                  </button>
                </form>

                <p>
                  Already have an account?
                  <NavLink
                    className="w-28 bg-white border-2 rounded-md hover:scale-90 p-1"
                    to="/LogIn"
                  >
                    LogIn
                  </NavLink>
                </p>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
};

export default SignUp;
