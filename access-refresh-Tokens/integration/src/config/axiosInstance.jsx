import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  // withCredentials: true
})


//* Interceptors (incoming res , outgoing req) have two callbacks 
// axiosInstance.interceptors.request.use()

// here we use response coz we gat an error when user have no accessToken , so for save in between the server to UI , in middle line we can manipulate using interceptors, jab tak hame intorseptor se response ko return nahi karenge wo nahi jaa payega
axiosInstance.interceptors.response.use(
  (response)=>{
    console.log("axios instance (interseptor-> abhi Ui tak nahi pohocha) response ->", response )
    return response
  },
  (error)=>{
    console.log("error in instance",error)

    if(error.response?.status === 401){
      axiosInstance.get("/get-accessToken")
    }
  }

)