const express = require("express")
const router = express.Router()

const { authMiddleware } = require("../middlewares/auth.middleware.js")


router.get("/", authMiddleware, (req,res)=>{
  return res.status(201).json({
    messgae: "Home fetched successfully",
    success: true
  })
})


module.exports = router
