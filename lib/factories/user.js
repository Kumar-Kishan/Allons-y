import User from "../../models/users"

class UserFactory{
	static async produceUser(name,email,social){
		let user = new User({
			name: name,
			email: email,
			socials: [social],
			tokens: []
		})
		try{
			user = await user.save()
		}catch(err){
			throw err
		}
		return user
	}
}

export default UserFactory
