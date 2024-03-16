import { reportapi } from '../config/axios';

export const monthly_report = async () => {	

	var result = await reportapi.get("/monthly-sales")

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false

}