import { orderapi } from '../config/axios';

export const ordered_menus = async () => {	

	var result = await orderapi.get("/ordered-menus")

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false

}

export const total_transaction = async () => {	

	var result = await orderapi.get("/total-transaction")

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false

}