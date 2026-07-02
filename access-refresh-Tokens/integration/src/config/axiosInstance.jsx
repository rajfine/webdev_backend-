import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
})



//! using interceptors hame accessToken jab nahi ho toh error jaaane se pehle hi usme /getme fxn call karni h 
axiosInstance.interceptors.response.use(
  (response)=>  response,
  async (err)=>{
    // console.log("error in interceptors", err)
    // console.log(err.config)
    let originalReq = err.config

    if(err.response.status === 401 || !originalReq.retry){
      // console.log("mujhe abb api call karni h")
      originalReq.retry = true

      try{
        await axiosInstance.get("/api/auth/get-accessToken")
        return axiosInstance(originalReq)
      }catch(err) {
        window.location.href = "/"
        Promise.reject(err)
      }
    }
  }
)









//* Interceptors (incoming res , outgoing req) have two callbacks 
// axiosInstance.interceptors.request.use()

//! here we use response coz we gat an error when user have no accessToken , so for save in between the server to UI , in middle line we can manipulate using interceptors, jab tak hame intorseptor se response ko return nahi karenge wo nahi jaa payega
// axiosInstance.interceptors.response.use(
//   (response)=>{
//     console.log("axios instance (interseptor-> abhi Ui tak nahi pohocha) response ->", response )
//     return response
//   },
//   (error)=>{
//     console.log("error in instance",error)

//     if(error.response?.status === 401){
//       axiosInstance.get("/get-accessToken")
//     }
//   }

// )