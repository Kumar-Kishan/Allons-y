import { Schema } from "mongoose"


let AttributeSchema = Schema({
	foodie: {
		type: Number
	},
	religious: {
		type: Number
	},
	thrilling: {
		type: Number
	},
	chilling: {
		type: Number
	},
	trekking: {
		type: Number
	},
	entertainment: {
		type: Number
	}
})
export default AttributeSchema
