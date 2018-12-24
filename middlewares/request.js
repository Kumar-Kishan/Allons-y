export default {
	SetupPaging: (req,res,next) => {
		req.body.perPage = req.body.perPage ? parseInt(req.body.perPage) : (parseInt(process.env.PER_PAGE) || 10)
		req.body.pageNo = req.body.pageNo ? parseInt(req.body.pageNo) : 1
		req.body.skip = req.body.skip ? parseInt(req.body.skip) : (req.body.pageNo  - 1) * req.body.perPage
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
