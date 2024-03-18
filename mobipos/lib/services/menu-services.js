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

export const add_menu = async (form) => {	

	var result = await menuapi.post("/add-menu", form)

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false
}

export const add_category_menu = async (form) => {	

	var result = await menuapi.post("/add-category-menu", form)

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false
}


export const update_menu = async (id, form) => {	

	var result = await menuapi.put("/update-menu/" + id, form)

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false
}

export const delete_menu = async (id) => {	

	var result = await menuapi.put("/delete-menu/" + id)

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false
}