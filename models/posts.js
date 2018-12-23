import {Schema, model as Model} from "mongoose"

let PostSchema  = Schema({
	"url" : {
		type: String,
		required: true
	},
	"text" : {
		type: String,
		required: false,
	},
	"location" : {
		type : {
			type: String,
			default: "Point"
		},
		coordinates: [Number]
	},
	"fistbumps" : {
		type: Number,
		default: 0
	}
})

PostSchema.index({location: "2dsphere"})

export default Model("Post", PostSchema, "posts")