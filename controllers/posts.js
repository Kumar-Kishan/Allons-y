import ResourceController from "../lib/resource_controller"
import Post from "../models/posts"
import Faker from "faker/locale/en"

class PostController extends ResourceController {
	constructor(model) {
		super(model)
	}

	mock(req, res) {
		let fakeData = []
		console.log(req.query)
		for (let index = 0; index < req.query.count; index++) {
			fakeData.push({
				url: Faker.image.imageUrl(270, 480),
				text: Faker.lorem.text(),
				location: {
					coordinates: [
						Faker.address.longitude(),
						Faker.address.latitude(),
					],
				},
				attributes: {
					foodie: Math.random(),
					religious: Math.random(),
					thrilling: Math.random(),
					chilling: Math.random(),
					trekking: Math.random(),
					entertainment: Math.random()
				}
			})
		}

		this.model
			.create(fakeData)
			.then(posts => {
				res.status(201).json(posts)
			})
			.catch(err => {
				res.status(400).json(err)
			})
	}
}

export default new PostController(Post)
