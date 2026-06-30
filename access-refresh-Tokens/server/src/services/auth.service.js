const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken")
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/generateTokens");

let registerService = async (data) => {
  try {
    let { name, email, password } = data;

    if (!name || !email)
      throw new Error("All feilds are required!")

    const isUserExist = await userModel.findOne({ email })
    if (isUserExist) 
      throw new Error("email already registered")

    let hashPass = bcrypt.hashSync(password, 10);
    let newUser = await userModel.create({
      name,
      email,
      password: hashPass,
    })

    const accessToken = generateAccessToken(newUser._id);
    const refreshToken = generateRefreshToken(newUser._id);

    newUser.refreshToken = refreshToken
    await newUser.save()

    return {
      accessToken,
      refreshToken,
      newUser,
    };
  } catch (err) {
    throw new Error(err);
  }
};


let loginService = async (data) => {
  try {
    let { email, password } = data;

    if (!email)
      throw new Error("All feilds are required!")

    const user = await userModel.findOne({ 
      email 
    })
    if (!user)
      throw new Error("email not found!")

    let hashPass = bcrypt.compareSync(password, user.password);
    // if (!hashPass)
    //   return res.status(400).json({
    //     message: "invalid credentials",
    //   });

    const accessToken = await generateAccessToken(user._id);
    const refreshToken = await generateRefreshToken(user._id);

    user.refreshToken = refreshToken
    await user.save()

    return {
      accessToken,
      refreshToken,
      user: user,
    };
  } catch (err) {
    throw new Error(err);
  }
};


let getAccessTokenService = async (refreshToken)=>{
  const decode = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET)
  if(!decode) throw new Error("unauthorized");

  let user = await userModel.findById(decode.id)

  if(refreshToken !== user.refreshToken){
    throw new Error("unauthorized");
  }

  let accessToken = generateAccessToken(user._id)

  return accessToken
}



module.exports = {
  registerService,
  loginService,
  getAccessTokenService
};
