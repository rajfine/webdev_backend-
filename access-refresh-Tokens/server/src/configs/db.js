const { default: mongoose } = require("mongoose");

let connectToDB = async (req, res)=>{
  try{
    await mongoose.connect("mongodb://0.0.0.0/test-artokens")
    console.log("mongodb connected")
  }catch(err){
    console.log("error in connecting DB! :", err)
  }
}



module.exports = connectToDB