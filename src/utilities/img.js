import axios from "axios";

export const signInData = async imgData =>{
  const formPhoto = new FormData()
        formPhoto.append('image' , imgData)

    const {data} = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Img_Host_Key}`,
      formPhoto 
    )
    return data?.data?.display_url
}

export const saveUser = async(axios ,user)=>{
  const {data } = await axios.post('/user' , user)
  return data;
}