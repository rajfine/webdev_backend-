import {registerUser} from '../controllers/auth.controller.js'
import { Router } from 'express'
import {registerValidator} from '../validators/auth.validator.js'

const authRouter = Router()


authRouter.post("/register", registerValidator ,registerUser)

export default authRouter