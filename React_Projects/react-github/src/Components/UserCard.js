import React from 'react';

const UserCard = ({userdetails}) => {
  return (
        
    <>
            <div className='flex flex-col items-center mt-10 gap-3'>
                <img 
                className='rounded-lg h-60 w-60'
                alt='user-avatar'
                src={userdetails.avatar_url}
                />
                <p className='bg-cyan-500 px-5 text-2xl text-black'> {userdetails.name} </p>
                <p className='bg-yellow-300 px-5 text-2xl text-black'> {userdetails.location} </p>
                <p className='bg-red-400 px-5 text-2xl text-black'> {userdetails.bio} </p>
                <p className='text-2xl text-black'> Is Available for Hiring ? : {userdetails.hireable ? "Yes" : "No"} </p>
                <p className='text-2xl text-black'> Number of Followers : {userdetails.followers} </p>
                <p className='text-2xl text-black'> Number of Followings : {userdetails.following} </p>
                <p className='text-2xl text-black'> Number of Public Repos : {userdetails.public_repos} </p>
            </div>


    </>

  );
};

export default UserCard;