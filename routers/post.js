import { Router } from "express"
import PostController from "../controllers/posts"
import { Request } from "../middlewares"


let router = new Router()

router.get("/", Request.ParamsToBody,Request.SetupPaging,PostController.fetchPaginate.bind(PostController))
router.get("/count", Request.ParamsToBody,Request.SetupPaging,PostController.count.bind(PostController))

//router.get("/mock", PostController.mock.bind(PostController))

export default router
