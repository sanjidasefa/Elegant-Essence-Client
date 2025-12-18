import React, { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router';

const secureInfo = axios.create({
  baseURL : 'http://localhost:3000'
})

const useUser = () => {
  const {user, logOut} = useAuth();
  const navigate = useNavigate()
  useEffect(()=>{
    const reqData = secureInfo.interceptors.request.use((config)=> {
      config.headers.Authorization = `Bearer ${user?.accessToken}`
    return config ;
    })
    const resData = secureInfo.interceptors.response.use((res)=>{
      return res
     }, (err)=>{
      console.log(err);
      const statusCode = err.status
      if(statusCode === 401 || statusCode === 403 ){
        logOut()
        .then(()=>{
          navigate('/login')
        })
      }
      return Promise.reject(err)
    })
    return ()=> {
     secureInfo.interceptors.request.eject(reqData)
     secureInfo.interceptors.request.eject(resData)
    }
  },[user])
  return  secureInfo;
};

export default useUser;