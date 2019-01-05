import { Router } from "express"
import { Identity, Request } from "../middlewares"
import IdentityController from "../controllers/identity"

let router = new Router()

router.get("/",Request.ParamsToBody, Request.SetupPaging , IdentityController.fetchPaginate.bind(IdentityController))
router.post("/query", Request.ParamsToBody, Request.SetupPaging, IdentityController.retrieve.bind(IdentityController))
router.post("/", Identity.convertPayload , IdentityController.create.bind(IdentityController))

export default router
