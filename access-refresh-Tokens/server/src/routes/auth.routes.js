const express = require("express")
const { registerController, loginController, getAccessTokenController, getmeController } = require("../controllers/auth.controller")
const { authMiddleware } = require("../middlewares/auth.middleware")

let router = express.Router()


router.get("/get-accessToken", getAccessTokenController)

router.post("/register", registerController)

router.post("/login", loginController)

router.get("/getme", authMiddleware, getmeController)

module.exports = router