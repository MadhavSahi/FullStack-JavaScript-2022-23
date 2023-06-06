import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import UserCard from '../Components/UserCard'
import UserRepos from '../Components/UserRepos'
import { UserContext } from '../Context/UserContext';

const Home = () => {

  const navigate=useNavigate();
  const ThisCompContext=useContext(UserContext);
  const [query,setQuery]=useState("");
  const [user,setUser]=useState(null);

  const checkquery=(e)=>{
    const text=e.target.value;
    const newtext=text.replaceAll(" ", "");
    // console.log(newtext);
    setQuery(newtext);
  }

  const fetchDetails=async()=>{
    try {
      const response=await axios.get(`https://api.github.com/users/${query}`);
      const data=response.data;
      setUser(data);
    } catch (error) {
        toast("No user found for this username",
        {
          type:"error",
          position:"top-right",
        })
    }
  }

  if(ThisCompContext.user===null){
      return navigate("/LogIn");
  }
  else{    
    return (
    <>
        <div className='flex flex-row justify-center gap-3 mt-40 p-2'>
          <p className='text-2xl text-black bg-gray-400 p-3'>Enter GitHub User Name :</p>
          <input
            className='text-2xl text-black border-2 pl-5 border-black'
            type="text"
            placeholder='Enter UserName'
            value={query}
            onChange={(e)=> checkquery(e)}
            />
          <button
          className='px-2 text-lg text-white bg-blue-600 hover:scale-95 font-semibold rounded-md'
          onClick={fetchDetails}
          >
            SUBMIT
          </button>
        </div>

        <div>

        {user ? <UserCard userdetails={user} /> : null}
        {user ? <UserRepos userdetails={user} user_repos={user.repos_url} /> : null}

        </div>
    </>
  )
}
}

export default Home