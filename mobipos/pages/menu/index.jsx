import React from 'react'
import { MainLayout } from '../../lib/layouts/pageLayout'
import { MenuList } from '../../lib/components/menuCom'
import * as menuapi from '../../lib/services/menu-services'
import { BModal, BInputText, BTextField, SelectTag } from '../../lib/components/elements'

class MenuPage extends React.Component  {


	constructor(props) {
    	super(props);
    	this.state = {
    		menuList: [],    		
    		item_menu: {},
    		isOpenModal: false,
    		modalNewMenu: false,
    		modalDelMenu: false,
    		isLoading: true
    	}
    }

    componentDidMount(){

    	this.initMenu()

    }

    initMenu(){
    	menuapi.category_menu().then((res) => {

    		var result_arr = []
    		if(res.status){
    			result_arr = res.data
    		}
    		
    		this.setState({
    			isLoading: false,
    			menuList: result_arr
    		})

    	})
    }

    toggleModal(item){       	  	
    	this.setState({
    		isOpenModal: !this.state.isOpenModal,
    		item_menu: item
    	})
    }

    toggleAddModal(e){
    	e.preventDefault()
    	this.setState({
    		modalNewMenu: !this.state.modalNewMenu
    	})
    }

    toggleDelModal(item){    	
    	this.setState({
    		item_menu: item,
    		modalDelMenu: !this.state.modalDelMenu	
    	})
    }

    onAddMenu(e){
    	e.preventDefault()

    	var menu_name = e.target.menuname.value
    	var price = e.target.price.value
    	var desc = e.target.description.value
    	var cat = e.target.selcat.value

    	var _form = {
            'menu_name': menu_name,
            'descriptions': desc,
            'price': price
        };

        menuapi.add_menu(_form).then((res) => {

        	if(res){

        		var menuid = res.data.menu_id;
                var __form = {
                    'menu_id': menuid,
                    'category_no': cat
                };

                menuapi.add_category_menu(__form).then((_res) => {
                	this.setState({
                		isLoading: true,
                		modalNewMenu: !this.state.modalNewMenu
                	})

                	this.initMenu()
                })
        	}

        })
    }

    onUpdateItem(e){
    	e.preventDefault()
    	const { item_menu } = this.state
    	
    	var menu_name = e.target.menuname.value
    	var price = e.target.price.value
    	var desc = e.target.description.value

    	var obj = {
    		menu_name: menu_name,
    		price: price,
    		descriptions: desc
    	}

    	menuapi.update_menu(item_menu.menu_id, obj).then((res) => {
    		
    		this.setState({
    			isLoading: true,
    			isOpenModal: !this.state.isOpenModal,
    		})

    		this.initMenu()
    	})
    }

    onDeleteMenu(e){
    	e.preventDefault()

    	menuapi.delete_menu(this.state.item_menu.menu_id).then((res) => {

    		this.setState({
    			isLoading: true,
    			modalDelMenu: !this.state.modalDelMenu,
    		})

    		this.initMenu()
    	})
    }

    render(){

    	if(this.state.isLoading){
    		return (
    			<MainLayout>
    				<div className='text-center'>Please Wait</div>
		    	</MainLayout>
    		)
    	}

    	if(this.state.menuList.length == 0){
    		return (
    			<MainLayout>
    				<div className='text-center'>Empty Menu</div>
		    	</MainLayout>
    		)
    	}

    	return (
    		<MainLayout>
    			<h1 className="mt-4">Menu</h1>
                <ol className="breadcrumb mb-3">
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active">Menu Items</li>
                </ol>
                <div className='mb-3'>
                	<button type='button' className='btn btn-md btn-primary' onClick={(e) => this.toggleAddModal(e) }>New Menu</button>
                </div>
    			<div className='row'>
    				{
    					this.state.menuList.map((cat, index) => {
    						return (
    							<div className='col-md-4' key={'col-' + index}>
	    				 			<div className='card mt-2'>
			    						<div className='card-header'><h3 className='card-title'>{cat.catname}</h3></div>
			    						<div className='card-body'>
    				 						<MenuList catid={cat.category_no} toggleModal={(e) => this.toggleModal(e)} toggleDelModal={(e) => this.toggleDelModal(e)} />
    				 					</div>
    				 				</div>
    				 			</div>
    						)
    					})
    				}
    			</div>
    			
    			<form onSubmit={(e) => this.onUpdateItem(e)} method='post' key={'update-menu'}>
	    			<BModal id='updatemenu' title={"Update Menu"} is_open={this.state.isOpenModal} onClose={(e) => this.toggleModal(this.state.item_menu) } footer={<button className='btn btn-md btn-primary'>Update</button>} >
	    				<BInputText id={this.state.item_menu.menu_id} label={"Menu Name"} name="menuname" value={this.state.item_menu.menu_name} error_msg={"This field is required"} is_valid={true} />
	    				<BInputText type='number' id={this.state.item_menu.price} label={"Menu Price"} name="price" value={this.state.item_menu.price} error_msg={"This field is required"} is_valid={true} />
	    				<BTextField id={this.state.item_menu.menu_id} label={"Menu Description"} name={'description'} value={this.state.item_menu.descriptions} error_msg={"This field is required"} is_valid={true} />
	    			</BModal>
	    		</form>
    			<form onSubmit={(e) => this.onAddMenu(e)} method='post' key={'add-menu'}>
	    			<BModal id='addmenu' title={"Add Menu"} is_open={this.state.modalNewMenu} onClose={(e) => this.toggleAddModal(e) } footer={<button className='btn btn-md btn-primary'>Add</button>} >
	    				<SelectTag opts={this.state.menuList.map((item ) => {
	    					return {
	    						value: item.category_no,
	    						label: item.catname
	    					}
	    				})} id="selcat" label="Menu category" is_valid={true}/>
	    				<BInputText id={this.state.item_menu.menu_id} label={"Menu Name"} name="menuname" error_msg={"This field is required"} is_valid={true} />
	    				<BInputText type='number' id={this.state.item_menu.price} label={"Menu Price"} name="price" error_msg={"This field is required"} is_valid={true} />
	    				<BTextField id={this.state.item_menu.menu_id} label={"Menu Description"} name={'description'} error_msg={"This field is required"} is_valid={true} />
	    			</BModal>
	    		</form>
    			
	    		<BModal id='delitem' title={"Delete Menu"} is_open={this.state.modalDelMenu} onClose={(e) => this.toggleDelModal(this.state.item_menu) } footer={<button className='btn btn-md btn-danger' onClick={(e) => this.onDeleteMenu(e)}>Delete</button>} >
    				 <p>Are you sure to delete: <strong>{this.state.item_menu.menu_name}?</strong></p>
    			</BModal>
	    		
    		</MainLayout>
    	)
    	
    }

}

export default MenuPage