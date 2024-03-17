import React, { Suspense, useRef, useState, useEffect  } from "react";
import Link from 'next/link'
import { useAsync } from "react-async"
import { cat_items, item_stocks } from '../services/inventory-services'

export const ItemList = (props) => {
	const { catno } = props
	const { data, error, isPending } = useAsync({ promiseFn: cat_items, catno: catno })

	if (isPending) return "Loading Item"
  	if (error) return `Something went wrong: ${error.message}`

  	if (data){
  		
  		var items = data.data
  		
  		if(items.length == 0){
  			return (
  				<ul className="list-group list-group-flush">
  					<li className="list-group-item">
  						<strong>Empty Items</strong>
  					</li>
  				</ul>
  			)
  		}

  		return (
  			<ul class="list-group list-group-flush">
  				{
  					items.map((item, index) => {
  						return (
  							<li className="list-group-item" key={'list-' + index}>
  								<div className='row'>
								  	<div className='col-md-8'>
  										{item.item_name}
  										<ItemStock item_no={item.item_no} />
  									</div>
  									<div className='col-md-4 text-end'>
  										<Link href={'/'} className='btn btn-sm btn-info'>View Stocks</Link>
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


export const ItemStock = (props) => {

	const { item_no } = props

	const { data, error, isPending } = useAsync({ promiseFn: item_stocks, item_no: item_no })

	if (isPending) return "..."
  	if (error) return `Something went wrong: ${error.message}`

  	if(data){
  		return (
  			<div>
  				<div>Stock: {data.data.total}</div>
  			</div>
  		)
  	}

}
