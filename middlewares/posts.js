export default {
	PopulateAuthor : (req,res,next) => {
		req.body.populates.push({
			path: "author",
			select: "name"
		})
		return next()
	}
}
