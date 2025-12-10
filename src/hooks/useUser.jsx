import React from 'react';
import axios from 'axios';

const secureInfo = axios.create({
  baseURL : 'http://localhost:3000'
})

const useUser = () => {
  return  secureInfo;
};

export default useUser;