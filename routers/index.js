import { Router } from "express"
import PostRouter from "./post"
import IdentityRouter from "./identity"
import UserRouter from "./user"
import AuthRouter from "./auth"

let router = new Router()

router.use("/identities", IdentityRouter)
router.use("/posts", PostRouter)
router.use("/users", UserRouter)
router.use("/", AuthRouter)

export default router
