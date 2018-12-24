import { Schema, model as Model } from "mongoose"

let IdentitySchema = Schema({
	deviceName: {
		type: String,
		required: false,
	},
	uniqueIdentifier: {
		type: String,
		required: true,
	},
	identifierType: {
		type: String,
		required: true,
	},
	location: {
		type: {
			type: String,
			default: "Point",
		},
		coordinates: [Number],
	},
})

IdentitySchema.index({ location: "2dsphere" })

export default Model("Identity", IdentitySchema, "identities")
