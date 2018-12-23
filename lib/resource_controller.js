
class ResourceController{
	constructor(model){
		this.model = model
	}

	create(req,res){
		this.model.create(req.body.payload).then((object) => {
			res.status(201).json(object)
		}).catch((err)=>{
			res.status(400).json(err)
		})
	}

	retrieve(req,res){
		this.model.find(req.body.query).then((objects) =>{
			res.json(objects)
		}).catch(err => {
			res.status(400).json(err)
		})
	}
}

export default ResourceController
