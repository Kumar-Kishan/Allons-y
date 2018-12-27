export default{
	convertPayload : (req,res,next) =>{
		if(req.body.payload.imei != null){
			let imei  = req.body.payload
			req.body.payload.uniqueIdentifier = imei
			req.body.payload.identifierType = "imei"
			delete req.body.payload.imei
		}
		let ip = req.ip
		req.body.payload.ipAddresses = [ip]
		next()
	}
}
