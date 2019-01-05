import { Router } from "express"
import PostRouter from "./post"
import IdentityRouter from "./identity"

let router = new Router()

router.use("/identities", IdentityRouter)
router.use("/posts", PostRouter)

export default router
