import React, { Suspense, useRef, useState, useEffect  } from "react";
import Link from 'next/link'
import { useAsync } from "react-async"
import { cat_menu } from '../services/menu-services'


export const MenuList = (props) => {

	const { catid } = props
	const { data, error, isPending } = useAsync({ promiseFn: cat_menu, catid: catid })

	if (isPending) return "Loading Item"
  	if (error) return `Something went wrong: ${error.message}`

  	if(data){
  		
  		if(data.status == false){
  			return (
  				<ul className="list-group list-group-flush">
  					<li className="list-group-item">Empty Menu</li>
  				</ul>
  			)
  		}

  		else if(data.status == true){
  			var menus = data.data
  			return (
  				<ul className="list-group list-group-flush">
  					{
  						menus.map((item, index) => {
  							return (
								<li className="list-group-item">
									<h5 className='text-center'>{item.menu_name}</h5>
									<div>Price: {item.price}</div>
									<div>Description: {item.description}</div>
									<div className='row justify-content-center mt-2'>
										<div className='col-md-6'>
											<button type='buttton' className='btn btn-sm btn-warning me-2'>Edit</button>
											<button type='buttton' className='btn btn-sm btn-danger'>Delete</button>
										</div>
									</div>
								</li>
  							)
  						})
  					}
  				</ul>
  			)
  		}
  	}
}