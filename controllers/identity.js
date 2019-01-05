import ResourceController from "../lib/resource_controller"
import Identity from "../models/identity"

class IdentityController extends ResourceController{
	constructor(model){
		super(model)
	}
}

export default new IdentityController(Identity)
