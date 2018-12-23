import { Router } from "express"
import PostController from "../controllers/posts"
let router = new Router()

router.get("/", PostController.retrieve.bind(PostController))

//router.get("/mock", PostController.mock.bind(PostController))

export default router
