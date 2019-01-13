import { Schema, model as Model } from "mongoose"
import AttributeSchema from "./schemas/attributes"
import SocialSchema from  "./schemas/social"
import TokenSchema from "./schemas/token"

let UserSchema = Schema({
	name: {
		type: String
	},
	email : {
		type: String,
		unique: true
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
	tokens: [TokenSchema],
})

export default Model("User", UserSchema, "users")
