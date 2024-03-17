import React from 'react'
import { MainLayout } from '../../lib/layouts/pageLayout'
import { ItemList } from '../../lib/components/inventoryCom'
import * as invapi from '../../lib/services/inventory-services'

class InventoryPage extends React.Component  {


	constructor(props) {
    	super(props);
    	this.state = {
    		cats: [],
    		isLoading: true
    	}
    }

    initCats(){
    	invapi.cat_list().then((res) => {
    		if(res.status){
    			
    			var data = res.data
    			var result_arr = []
    			
    			if(data.items.length > 0){ 
    				result_arr = data.items
    			}

    			this.setState({
    				cats: result_arr,
    				isLoading: false
    			})
    		}
    	})
    }

    componentDidMount(){
    	this.initCats()
    }

    render(){

    	if(this.state.isLoading){
    		return (
    			<div>Please wait...</div>
    		)
    	}

    	if(this.state.cats.length == 0){
    		return (
    			<div>Empty Items</div>
    		)
    	}

    	return (
    		<MainLayout>
    			<div className='row'>
    				 {
    				 	this.state.cats.map((item, index) => {
    				 		return (
    				 			<div className='col-md-4' key={'col-' + index}>
	    				 			<div className='card mt-5'>
			    						<div className='card-header'><h4 className='card-title'>{item.catname}</h4></div>
			    						<div className='card-body'>
    				 						<ItemList catno={item['category_no']} />
    				 					</div>
    				 				</div>
    				 			</div>
    				 		)
    				 	})
    				 }
    			</div>
    		</MainLayout>
    	)
    }

}

export default InventoryPage