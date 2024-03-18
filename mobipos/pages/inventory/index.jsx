import React from 'react'
import { MainLayout } from '../../lib/layouts/pageLayout'
import { ItemList } from '../../lib/components/inventoryCom'
import { BModal, BInputText, BTextField, SelectTag } from '../../lib/components/elements'

import * as invapi from '../../lib/services/inventory-services'

class InventoryPage extends React.Component  {


	constructor(props) {
    	super(props);
    	this.state = {
    		cats: [],
    		isLoading: true,
            modalNewItem: false
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

    toggleNewItem(e){
        e.preventDefault()
        this.setState({
            modalNewItem: !this.state.modalNewItem
        })
    }

    onAddItem(e){
        e.preventDefault()
        
        var itemName = e.target.itemname.value
        var itemPrice = e.target.price.value
        var itemSale = e.target.salesprice.value
        var cat = e.target.selcat.value

        var form = {
            'item_name': itemName,
            'actual_price': itemPrice,
            'sales_price': itemSale,
            'item_desc': ''
        };

        invapi.add_item(form).then((res) => {
            if(res){

                var item_no = res.data.item_no
                var _form = {
                    'item_no': item_no,
                    'category_no': cat
                };

                invapi.add_cat_item(_form).then((_res) => {
                    
                    this.setState({
                        isLoading: true,
                         modalNewItem: !this.state.modalNewItem
                    })

                    this.initCats()
                })

            }
        })
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
                <h1 className="mt-4">Inventory</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active">Items</li>
                </ol>
                <div className='mb-3'>
                    <button type='button' className='btn btn-md btn-primary' onClick={(e) => this.toggleNewItem(e) }>New Item</button>
                </div>
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

                <form onSubmit={(e) => this.onAddItem(e)} method='post' key={'update-menu'}>
                    <BModal id='updatemenu' title={"Add Item"} is_open={this.state.modalNewItem} onClose={(e) => this.toggleNewItem(e) } footer={<button className='btn btn-md btn-primary'>Add</button>} >
                        <SelectTag opts={this.state.cats.map((item ) => {
                            return {
                                value: item.category_no,
                                label: item.catname
                            }
                        })} id="selcat" label="Item category" is_valid={true}/>
                        <BInputText id={"itemname"} label={"Item Name"} name="itemname" error_msg={"This field is required"} is_valid={true} />
                        <BInputText type='number' id={"price"} label={"Price"} name="price" error_msg={"This field is required"} is_valid={true} />
                        <BInputText type='number' id={"salesprice"} label={"Sales Price"} name="salesprice" error_msg={"This field is required"} is_valid={true} />
                    </BModal>
                </form>

    		</MainLayout>
    	)
    }

}

export default InventoryPage