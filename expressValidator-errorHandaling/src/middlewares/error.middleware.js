import dotenv from 'dotenv'
dotenv.config()

const errorHandler = (err,req,res,next)=>{
  const response = {
    message: err.message,
    // stack : err.stack
  }
  if(process.env.NODE_ENVIRONMENT === "development"){
    response.stack = err.stack
  }
  res.status(err.status).json(response)
}

export default errorHandler