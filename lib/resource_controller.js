import {PopulateSelectQuery} from "./helpers"

class ResourceController {
	constructor(model) {
		this.model = model
	}

	create(req, res) {
		this.model
			.create(req.body.payload)
			.then(object => {
				res.status(201).json(object)
			})
			.catch(err => {
				//console.log(err)
				res.status(400).json({
					message: err.message
				})
			})
	}

	retrieve(req, res) {
		this.model
			.find(req.body.query)
			.then(objects => {
				res.json(objects)
			})
			.catch(err => {
				res.status(400)
				console.log(err)
			})
	}

	fetchPaginate(req, res) {
		console.log("Heello")
		let query = this.model
			.find(req.body.query)
			.skip(req.body.skip)
			.limit(req.body.count)
		query = PopulateSelectQuery(query, req.body.populates, req.body.select)
		query
			.then(objects => {
				res.json({
					offset: req.body.skip + objects.length,
					items: objects,
				})
			})
			.catch(err => {
				res.status(400).json(err)
			})
	}

	count(req, res) {
		this.model
			.find(req.body.query)
			.count()
			.then(count => {
				res.json({
					count: count,
				})
			})
			.catch(err => {
				res.status(400).json(err)
			})
	}
}

export default ResourceController
