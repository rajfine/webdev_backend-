// export const registerUser = async (req,res)=>{
//   throw new Error("somthing happens while registering user")
// }

export async function registerUser(req,res,next){
  // throw new Error("somthing happens while registering user")
  try{
    // throw new Error("password is too weak")
    res.status(201).json({
      message : "user registered successfully"
    })
  }catch(err){
    err.status = 400
    next(err)
  }
} 