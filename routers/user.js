import { Router } from "express"
import UserController from "../controllers/user"
import { Request } from "../middlewares"


let router = new Router()

router.get("/", Request.ParamsToBody,Request.SetupPaging,UserController.fetchPaginate.bind(UserController))
router.get("/count", Request.ParamsToBody,Request.SetupPaging,UserController.count.bind(UserController))

//router.get("/mock", UserController.mock.bind(UserController))

export default router
