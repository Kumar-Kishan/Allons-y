import { Router } from "express"
import PostRouter from "./post"

let router = new Router()

router.use("/posts", PostRouter)

export default router
