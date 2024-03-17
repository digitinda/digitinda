import React from 'react'
import { MainLayout } from '../../lib/layouts/pageLayout'
import { MenuList } from '../../lib/components/menuCom'
import * as menuapi from '../../lib/services/menu-services'

class MenuPage extends React.Component  {


	constructor(props) {
    	super(props);
    	this.state = {
    		menuList: [],
    		isLoading: true
    	}
    }

    componentDidMount(){

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
    			<div className='row'>
    				{
    					this.state.menuList.map((cat, index) => {
    						return (
    							<div className='col-md-4' key={'col-' + index}>
	    				 			<div className='card mt-5'>
			    						<div className='card-header'><h3 className='card-title'>{cat.catname}</h3></div>
			    						<div className='card-body'>
    				 						<MenuList catid={cat.category_no} />
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

export default MenuPage