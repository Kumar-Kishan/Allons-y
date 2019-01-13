import User from "../models/users"
import TokenFactory from "../lib/factories/token"
import UserFactory from "../lib/factories/user"

class AuthController{
	login(req,res){
		if(req.body.payload.type == "social"){
			User.findOne({
				socials: {
					$elemMatch: req.body.payload.social
				}
			}).then(async user => {
				let newUser = false
				if(!user){
					newUser = true
					user = await UserFactory.produceUser(req.body.payload.name,req.body.payload.email, req.body.payload.social)
				}
				let token = TokenFactory.produceToken()

				if(user.tokens == null) user.tokens = []
				user.tokens.push(token)
				user.save((err)=>{
					if(err) throw err
					else{
						res.status(200).json({
							token: token,
							newUser : newUser
						})
					}
				})
			}).catch(err => {
				console.log(err)
				res.status(400).send(err)
			})
		}else{
			res.status(405).json({
				message: "Currently Only social login allowed"
			})
		}
	}
}

export default new AuthController()
