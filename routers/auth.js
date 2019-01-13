import AuthController from "../controllers/auth"
import {Router} from "express"
import {Request} from "../middlewares"

let router = new Router()

router.post("/login", Request.VerifyPayload, AuthController.login)

export default router
