import ResourceController from "../lib/resource_controller"
import Users from "../models/users"
import Posts from "../models/posts"
import Faker from "faker/locale/en"
import foodporn from "../data/foodporn.json"

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
					foodie: (Math.random() / 2)  + 0.5,
					religious: Math.random() / 10,
					thrilling: Math.random() / 10,
					chilling: Math.random() / 10,
					trekking: Math.random() / 10,
					entertainment: Math.random() / 10
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
							url: foodporn.posts[ Math.ceil(Math.random() * foodporn.posts.length)][0].url,
							text: Faker.lorem.text(),
							location: {
								coordinates: [
									Faker.address.longitude(),
									Faker.address.latitude(),
								],
							},
							attributes: {
								foodie: (Math.random() / 2)  + 0.5,
								religious: Math.random() / 10,
								thrilling: Math.random() / 10,
								chilling: Math.random() / 10,
								trekking: Math.random() / 10,
								entertainment: Math.random() / 10
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
			.catch((err) => {
				console.log(err)
				done()
				//res.status(400).json(err)
			})
	}
}

export default new UserController(Users)
