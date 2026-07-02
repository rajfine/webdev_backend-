const express = require("express")
const cookieparser = require("cookie-parser")
const authRoutes = require("./routes/auth.routes.js")
const homeRoutes = require("./routes/home.routes.js")
const cors = require("cors")

const app = express()
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))


app.use(cookieparser())
app.use(express.json())


app.use("/api/auth",authRoutes)
app.use("/api/home",homeRoutes)







module.exports = app