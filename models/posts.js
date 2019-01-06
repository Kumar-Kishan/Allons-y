import { Schema, model as Model } from "mongoose"
import AttributeSchema from "./schemas/attributes"


let PostSchema = Schema({
	url: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: false,
	},
	location: {
		type: {
			type: String,
			default: "Point",
		},
		coordinates: [Number],
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	fistbumps: {
		type: Number,
		default: 0,
	},
	attributes: AttributeSchema,
})

PostSchema.index({ location: "2dsphere" })

export default Model("Post", PostSchema, "posts")
