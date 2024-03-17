import { menuapi } from '../config/axios';


export const category_menu = async () => {	

	var result = await menuapi.get("/category-menu")

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false

}


export const cat_menu = async ({ catid }) => {	

	var result = await menuapi.get("/cat-menus/" + catid)

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false

}