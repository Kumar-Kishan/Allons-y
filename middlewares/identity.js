export default{
	convertPayload : (req,res,next) =>{
		if(req.body.payload.imei != null){
			let imei  = req.body.payload.imei
			req.body.payload.uniqueIdentifier = imei
			req.body.payload.identifierType = "imei"
			delete req.body.payload.imei
		}
		let ip = req.ip
		req.body.payload.location = {
			type: "Point",
			coordinates: [ 0.00 , 0.00 ]
		}
		req.body.payload.ipAddresses = [{
			address: ip,
			accessTime: new Date(Date.now())
		}]
		return next()
	}
}
