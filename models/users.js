import { Schema, model as Model } from "mongoose"
import AttributeSchema from "./schemas/attributes"
import SocialSchema from  "./schemas/social"

let UserSchema = Schema({
	name: {
		type: String
	},
	email : {
		type: String
	},
	password: {
		type: String,
		default : null
	},
	identities: [{
		type: Schema.Types.ObjectId,
		ref: "Identity"
	}],
	socials : [SocialSchema],
	attributes: AttributeSchema,
})

export default Model("User", UserSchema, "users")
