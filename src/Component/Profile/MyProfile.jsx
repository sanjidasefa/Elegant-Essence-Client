import React from 'react';
import { Link } from 'react-router';
import { useAuth } from '../../hooks/useAuth';


const MyProfile = () => {
  const { logOut} = useAuth()
  const handleLogOut = ()=>{
      logOut()
  }
  
  return (
    <div  className='bg-cyan-50 p-10'>
      <img src="" alt="" />

     <button onClick={handleLogOut} className="btn btn-neutral mt-2"> <Link to='/'>Log-Out</Link></button>
    </div>
  );
};

export default MyProfile;