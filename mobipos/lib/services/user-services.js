import { userapi } from '../config/axios';


export const do_login = async (username, password) => {	
	
	var data = {
		username: username,
		password: password
	}

	var result = await userapi.post("/login", data)

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false

}


export const do_register = async (form) => {	

	var result = await userapi.post("/register", form)

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false

}