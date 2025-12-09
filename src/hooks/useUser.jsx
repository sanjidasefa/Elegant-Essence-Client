import React from 'react';
import axios from 'axios';

const secureInfo = axios.create({
  baseURL : ''
})

const useUser = () => {
  return  secureInfo;
};

export default useUser;