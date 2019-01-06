import { Router } from "express"
import PostRouter from "./post"
import IdentityRouter from "./identity"
import  UserRouter from "./user"

let router = new Router()

router.use("/identities", IdentityRouter)
router.use("/posts", PostRouter)
router.use("/users", UserRouter)

export default router
