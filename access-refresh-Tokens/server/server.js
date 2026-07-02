require("dotenv").config()
const app = require("./src/app.js")
const connectToDB = require("./src/configs/db.js")

connectToDB()

let PORT = process.env.PORT
app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)
})