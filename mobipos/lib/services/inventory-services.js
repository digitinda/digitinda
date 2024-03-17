import { invapi } from '../config/axios';

export const cat_list = async () => {	

	var result = await invapi.get("/cat-list2")

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false

}

export const edit_cat = async (category_no, form) => {	

	var result = await invapi.put("/edit-cat/" + category_no, form)

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false

}

export const delete_cat = async (category_no) => {	

	var result = await invapi.get("/delete-cat/" + category_no)

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false

}

export const edit_items = async (item_no, form) => {	

	var result = await invapi.put("/edit-item/" + item_no, form)

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false

}


export const item_stocks = async ({ item_no }) => {	

	var result = await invapi.get("/item-stocks/" + item_no)

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false

}


export const cat_items = async ({ catno }) => {	

	var result = await invapi.get("/cat-items/" + catno)

	if(result.status != 200 || result.status != 201){
		return result.data
	}

	return false

}