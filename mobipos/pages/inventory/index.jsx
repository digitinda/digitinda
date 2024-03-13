import React from 'react'
import { MainLayout } from '../../lib/layouts/pageLayout'


class InventoryPage extends React.Component  {


	constructor(props) {
    	super(props);

    }


    render(){
    	return (
    		<MainLayout>
    			<div className='row'>
    				<div className='col-md-4'>
    					<div className='card mt-5'>
    						<div className='card-header'><h4 className='card-title'>Gasoline</h4></div>
    						<div className='card-body'>
    							<ul class="list-group list-group-flush">
								  <li class="list-group-item">
								  		<div className='row'>
								  			<div className='col-md-8'>
								  				Cras justo odio
								  			</div>
								  			<div className='col-md-4 text-center'>
								  				<div>No of Stock:</div>
								  				<div>4</div>
								  			</div>
								  		</div>
								  	</li>
								  <li class="list-group-item"><div className='row'>
								  			<div className='col-md-8'>
								  				Cras justo odio
								  			</div>
								  			<div className='col-md-4 text-center'>
								  				<div>No of Stock:</div>
								  				<div>4</div>
								  			</div>
								  		</div></li>
								  <li class="list-group-item"><div className='row'>
								  			<div className='col-md-8'>
								  				Cras justo odio
								  			</div>
								  			<div className='col-md-4 text-center'>
								  				<div>No of Stock:</div>
								  				<div>4</div>
								  			</div>
								  		</div></li>
								  <li class="list-group-item">Porta ac consectetur ac</li>
								  <li class="list-group-item">Vestibulum at eros</li>
								</ul>
    						</div>
    					</div>
    				</div>
    				<div className='col-md-4'>
    					<div className='card mt-5'>
    						<div className='card-header'><h4 className='card-title'>Gasoline</h4></div>
    						<div className='card-body'>
    							<ul class="list-group list-group-flush">
								  <li class="list-group-item">
								  		<div className='row'>
								  			<div className='col-md-8'>
								  				Cras justo odio
								  			</div>
								  			<div className='col-md-4 text-center'>
								  				<div>No of Stock:</div>
								  				<div>4</div>
								  			</div>
								  		</div>
								  	</li>
								  <li class="list-group-item"><div className='row'>
								  			<div className='col-md-8'>
								  				Cras justo odio
								  			</div>
								  			<div className='col-md-4 text-center'>
								  				<div>No of Stock:</div>
								  				<div>4</div>
								  			</div>
								  		</div></li>
								  <li class="list-group-item"><div className='row'>
								  			<div className='col-md-8'>
								  				Cras justo odio
								  			</div>
								  			<div className='col-md-4 text-end'>
								  				
								  			</div>
								  		</div></li>
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

export default InventoryPage