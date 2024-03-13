import React from 'react'
import { MainLayout } from '../../lib/layouts/pageLayout'


class CategoryPage extends React.Component  {


	constructor(props) {
    	super(props);

    }


    render(){
    	return (
    		<MainLayout>
    			<div className='row'>
    				<div className='col-md-6'>
    					<div className='card mt-5'>
    						<div className='card-header'><h4 className='card-title'>Items</h4></div>
    						<div className='card-body'>
    							<ul class="list-group list-group-flush">
								  <li class="list-group-item">
								  		<div className='row'>
								  			<div className='col-md-8'>
								  				Cras justo odio
								  			</div>
								  			<div className='col-md-4 text-end'>
								  				<button type='button' className='btn btn-sm btn-warning me-2'>Edit</button>
								  				<button type='button' className='btn btn-sm btn-danger'>Delete</button>
								  			</div>
								  		</div>
								  	</li>
								  <li class="list-group-item"><div className='row'>
								  			<div className='col-md-8'>
								  				Cras justo odio
								  			</div>
								  			<div className='col-md-4 text-end'>
								  				<button type='button' className='btn btn-sm btn-warning me-2'>Edit</button>
								  				<button type='button' className='btn btn-sm btn-danger'>Delete</button>
								  			</div>
								  		</div></li>
								  <li class="list-group-item"><div className='row'>
								  			<div className='col-md-8'>
								  				Cras justo odio
								  			</div>
								  			<div className='col-md-4 text-end'>
								  				<button type='button' className='btn btn-sm btn-warning me-2'>Edit</button>
								  				<button type='button' className='btn btn-sm btn-danger'>Delete</button>
								  			</div>
								  		</div></li>
								  <li class="list-group-item">Porta ac consectetur ac</li>
								  <li class="list-group-item">Vestibulum at eros</li>
								</ul>
    						</div>
    					</div>
    				</div>
    				<div className='col-md-6'>
    					<div className='card mt-5'>
    						<div className='card-header'><h4 className='card-title'>Menus</h4></div>
    						<div className='card-body'>
    							<ul class="list-group list-group-flush">
								  <li class="list-group-item"><div className='row'>
								  		<div className='col-md-8'>
								  				Cras justo odio
								  			</div>
								  			<div className='col-md-4 text-end'>
								  				<button type='button' className='btn btn-sm btn-warning me-2'>Edit</button>
								  				<button type='button' className='btn btn-sm btn-danger'>Delete</button>
								  			</div>
								  		</div>
								  </li>
								  <li class="list-group-item">
								  		<div className='row'>
								  			<div className='col-md-8'>
								  				Cras justo odio
								  			</div>
								  			<div className='col-md-4 text-end'>
								  				<button type='button' className='btn btn-sm btn-warning me-2'>Edit</button>
								  				<button type='button' className='btn btn-sm btn-danger'>Delete</button>
								  			</div>
								  		</div>
								  </li>
								  <li class="list-group-item">Morbi leo risus</li>
								  <li class="list-group-item">Porta ac consectetur ac</li>
								  <li class="list-group-item">Vestibulum at eros</li>
								</ul>
    						</div>
    					</div>
    				</div>
    			</div>
    		</MainLayout>
    	)
    }

}

export default CategoryPage