export default {
	SetupPaging: (req,res,next) => {
		req.body.count = req.body.count ? parseInt(req.body.count) : (parseInt(process.env.PER_PAGE) || 10)
		req.body.pageNo = req.body.pageNo ? parseInt(req.body.pageNo) : 1
		req.body.skip = req.body.skip ? parseInt(req.body.skip) : (req.body.pageNo  - 1) * req.body.count
		next()
	},
	ParamsToBody: (req,res,next) => {
		for(let key in req.params){
			req.body[key] = req.params[key]
		}
		for(let key in req.query){
			req.body[key] = req.query[key]
		}

		next()
	}
}
