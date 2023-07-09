import React, { useEffect, useState } from "react";
import axios from "axios";

const UserRepos = ({ user_repos, userdetails }) => {
  const [repos, setRepos] = useState([]);

  const handlerepos = async () => {
    const response = await axios.get(user_repos);
    const data = response.data;
    setRepos(data);
  };
  useEffect(() => {
    handlerepos();
  }); // this is because if we will keep it empty then only it will render on 1st time...and then if we search for next user..only the 1st time values will be displayed...not the newer ones....very big problem.
  //...or either we can keep skip this thing...then it will render on every reload.

  return (
    <>
        <div className="flex flex-col items-center gap-5 mt-10">
          <p className="bg-pink-400 px-5 mb-5 text-3xl text-black">{userdetails.name} REPOS :-</p>
            {
                repos.map(each_repo=>{
                    return (
                        <div className="flex flex-col items-center mt-5" key={each_repo.id}>
                           <a href={`https://github.com/${each_repo?.full_name}`} target="_blank" rel="noreferrer" >
                           <p className="bg-cyan-500 font-semibold px-5 text-2xl text-black">{each_repo.name}
                            </p></a>
                            {/* <p>{each_repo.language}</p>
                            <p>{each_repo.description}</p> */}
                        </div>
                    )
                })
            }
        </div>

    </>
  );
};

export default UserRepos;
