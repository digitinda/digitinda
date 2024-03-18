import React from 'react'
import { MainLayout } from '../../lib/layouts/pageLayout'
import * as invapi from '../../lib/services/inventory-services'
import { BModal, BInputText, BTextField } from '../../lib/components/elements'

class CategoryPage extends React.Component  {


	constructor(props) {
    	super(props);
    	this.state = {
    		item_cats: [],
    		menu_cats: [],
    		item_row: {},
    		menu_row: {},
    		isOpenModal: false,
    		modalDelItem: false
    	}
    }

    componentDidMount(){
    	invapi.cat_list().then((res) => {
    		if(res.status){
    			var data = res.data
    			this.setState({
    				item_cats: data.items,
    				menu_cats: data.menus
    			})
    		}
    	})
    }

    initCats(){
    	invapi.cat_list().then((res) => {
    		if(res.status){
    			var data = res.data
    			this.setState({
    				item_cats: data.items,
    				menu_cats: data.menus
    			})
    		}
    	})
    }

    toggleModal(item){       	
    	this.setState({
    		isOpenModal: !this.state.isOpenModal,
    		item_row: item
    	})
    }

    toggleDelItem(item){       	
    	this.setState({
    		modalDelItem: !this.state.modalDelItem,
    		item_row: item
    	})
    }

    onUpdateItem(e){
    	e.preventDefault()
    	const { item_row } = this.state
    	
    	var catname = e.target.catname.value
    	var catdesc = e.target.catdesc.value

    	var obj = {
    		catname: catname,
    		catdesc: catdesc
    	}

    	invapi.edit_cat(item_row.category_no, obj).then((res) => {    		
    		this.initCats()
    		this.setState({
    			isOpenModal: !this.state.isOpenModal
    		})
    	})
    }

    onDeleteCat(e){
    	e.preventDefault()
    	const { item_row } = this.state

    	invapi.delete_cat(item_row.category_no).then((res) => {  
    		this.initCats()
    		this.setState({
    			modalDelItem: !this.state.modalDelItem
    		})
    	})
    }

    render(){

    	var DisplayItems = (props) => {

    		if(this.state.item_cats.length == 0){
    			return (
    				<h4 className='text-center'>You have no Category Items</h4>
    			)
    		}

    		return (
    			<table className='table'>
    				<thead><tr><th>Category Name</th><th>Description</th><th>Action</th></tr></thead>
    				<tbody>
	    				{
	    					this.state.item_cats.map((item, index) => {
	    						return (
	    							<tr>
	    								<td>{item.catname}</td>
	    								<td>{item.catdesc}</td>
	    								<td>
	    									<button type='button' className='btn btn-sm btn-warning me-2' onClick={(e) => this.toggleModal(item) }>Edit</button>
							  				<button type='button' className='btn btn-sm btn-danger' onClick={(e) => this.toggleDelItem(item) }>Delete</button>
							  			</td>
	    							</tr>
	    						)
	    					})
	    				}
    				</tbody>
    			</table>
    		)

    	}

    	var DisplayMenus = (props) => {

    		if(this.state.menu_cats.length == 0){
    			return (
    				<h4 className='text-center'>You have no Category Menus</h4>
    			)
    		}

    		return (
    			<table className='table'>
    				<thead><tr><th>Category Name</th><th>Description</th><th>Action</th></tr></thead>
    				<tbody>
	    				{
	    					this.state.menu_cats.map((item, index) => {
	    						return (
	    							<tr>
	    								<td>{item.catname}</td>
	    								<td>{item.catdesc}</td>
	    								<td>
	    									<button type='button' className='btn btn-sm btn-warning me-2' onClick={(e) => this.toggleModal(item) }>Edit</button>
							  				<button type='button' className='btn btn-sm btn-danger' onClick={(e) => this.toggleDelItem(item) }>Delete</button>
							  			</td>
	    							</tr>
	    						)
	    					})
	    				}
    				</tbody>
    			</table>
    		)

    	}

    	return (
    		<MainLayout>
    			<h1 className="mt-4">Categories</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active">Items and Menus</li>
                </ol>
                 <div className='mb-3'>
                	<button type='button' className='btn btn-md btn-primary' onClick={(e) => this.toggleAddModal(e) }>New Menu</button>
                </div>
    			<div className='row'>
    				<div className='col-md-6'>
    					<div className='card mt-5'>
    						<div className='card-header'><h4 className='card-title'>Items</h4></div>
    						<div className='card-body'>
    							<DisplayItems />
    						</div>
    					</div>
    				</div>
    				<div className='col-md-6'>
    					<div className='card mt-5'>
    						<div className='card-header'><h4 className='card-title'>Menus</h4></div>
    						<div className='card-body'>
    							<DisplayMenus />
    						</div>
    					</div>
    				</div>
    			</div>
    			
    			<form onSubmit={(e) => this.onUpdateItem(e)} method='post'>
	    			<BModal id='updateitem' title={"Update Item"} is_open={this.state.isOpenModal} onClose={(e) => this.toggleModal(this.state.item_row) } footer={<button className='btn btn-md btn-primary'>Update</button>} >
	    				<BInputText id={this.state.item_row.category_no} label={"Category Name"} name="catname" value={this.state.item_row.catname} error_msg={"This field is required"} is_valid={true} />
	    				<BTextField id={this.state.item_row.category_no} label={"Category Description"} name={'catdesc'} value={this.state.item_row.catdesc} error_msg={"This field is required"} is_valid={true} />
	    			</BModal>
	    		</form>

	    		<BModal id='delitem' title={"Delete Item"} is_open={this.state.modalDelItem} onClose={(e) => this.toggleDelItem(this.state.item_row) } footer={<button className='btn btn-md btn-danger' onClick={(e) => this.onDeleteCat(e)}>Delete</button>} >
    				 <p>Are you sure to delete: <strong>{this.state.item_row.catname}?</strong></p>
    			</BModal>

    		</MainLayout>
    	)
    }

}

export default CategoryPage