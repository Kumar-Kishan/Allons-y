import ResourceController from "../lib/resource_controller"
import Users from "../models/users"
import Posts from "../models/posts"
import Faker from "faker/locale/en"

class UserController extends ResourceController{
	constructor(model){
		super(model)
	}

	mock(req,res) {
		let fakeData = []
		console.log(req.query)
		let doneCount  = 0
		function done(){
			doneCount++
			if(doneCount == req.query.count){
				res.send({
					message: "Done",
					usersCount : doneCount
				})
			}
		}
		for (let index = 0; index < req.query.count; index++) {
			fakeData.push({
				name: Faker.name.findName(),
				email : Faker.internet.email(),
				password: "",
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
			.then(users => {
				users.forEach(user => {
					let postFakeData = []
					let count  = Math.random() * 10 + 2
					for (let index = 0; index < count; index++) {
						postFakeData.push({
							author : user._id,
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

					Posts.create(postFakeData)
						.then(() => {
							done()
							//res.status(201).json(posts)
						})
						.catch(() => {
							done()
							//res.status(400).json(err)
						})
				})

			})
			.catch(() => {
				done()
				//res.status(400).json(err)
			})
	}
}

export default new UserController(Users)
