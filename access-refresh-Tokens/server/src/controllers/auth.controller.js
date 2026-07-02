const { loginService, registerService, getAccessTokenService } = require("../services/auth.service.js")



const registerController = async (req,res)=>{

  let { accessToken, refreshToken, newUser } = await registerService(req.body)
  
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    maxAge: 5 * 60 * 1000,
  })
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    maxAge: 24 * 60 * 60 * 1000,
  })

  return res.status(201).json({
    messgae: "user registered successfully",
    success: true,
    user: newUser,
  })
}



const loginController = async (req,res)=>{
  const { accessToken, refreshToken, user } = await loginService(req.body)

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    maxAge: 5 * 60 * 1000,
  })
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    maxAge: 24 * 60 * 60 * 1000,
  })


  return res.status(201).json({
    messgae: "user loggedin successfully",
    success: true,
    user
  })
}


const getAccessTokenController = async (req,res)=>{
  const refreshToken  = req.cookies.refreshToken

  if(!refreshToken) return res.status(401).json({
    message: "unauthorized request"
  })

  const accessToken = await getAccessTokenService(refreshToken)
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    maxAge: 5 * 60 * 1000,
  })

  return res.status(201).json({
    messgae: "accessToken generated",
    success: true,
  })
}

const getmeController = async (req,res)=>{
  const user = req.user
  
  return res.status(200).json({
    message: "user fetched successfully",
    success: true,
    user
  })
} 

module.exports = {
  registerController,
  loginController,
  getAccessTokenController,
  getmeController
}