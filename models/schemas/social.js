import { Schema } from "mongoose"

let SocialSchema = Schema({
	provider: {
		type: String,
		enum: [ "facebook", "google", "twitter" ]
	},
	token: {
		type: String
	}
})

export default SocialSchema
