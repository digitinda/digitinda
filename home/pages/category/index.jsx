import React from 'react'
import Image from 'next/image'
import { Header } from './../../lib/components/common'

class CategoryPage extends React.Component  {


  constructor(props) {
    super(props);    
  }


  componentDidMount(){      

  }

  render(){


  		return (
  			<>
  			<Header />
  			<div className='container-wrapper'>
  				<div className='container-fluid'>
  					<div className='py-3'>
  						<h2 className='text-center'>WordPress Themes</h2>
  						<div className='text-start'>100 Results</div>
  					</div>
	  				<div className='row'>
	  					<div className='col-md-9'>
	  						<div className='p-2'>
		  						<ul id='category-list' className="list-group list-group-flush">
								  <li className="list-group-item">
								  		<div className='row'>
								  			<div className='col-md-4'>
								  				<img src='/images/thumb1.png' width='100%' />
								  			</div>
								  			<div className='col-md-4'>
								  				<div>	
								  					<h4>Elomus Single Product Shop Shopify Theme</h4>
								  					<div>by: John Doe</div>
								  					<div className='cat-item-content'>
								  						asdasdas
								  					</div>
								  				</div>
								  			</div>
								  			<div className='col-md-4'>
								  				<div className='text-center'>
								  					<a href='#' className='btn btn-md btn-primary'>Live Preview</a>
								  				</div>
								  			</div>
								  		</div>
								  </li>
								  <li className="list-group-item">
								  	<div className='row'>
								  			<div className='col-md-4'>
								  				<img src='/images/thumb1.png' width='100%' />
								  			</div>
								  			<div className='col-md-4'>
								  				<div>	
								  					<h4>Elomus Single Product Shop Shopify Theme</h4>
								  					<div>by: John Doe</div>
								  					<div className='cat-item-content'>
								  						asdasdas
								  					</div>
								  				</div>
								  			</div>
								  			<div className='col-md-4'>
								  				<div className='text-center'>
								  					<a href='#' className='btn btn-md btn-primary'>Live Preview</a>
								  				</div>
								  			</div>
								  		</div>
								  </li>
								  <li className="list-group-item">
								  	<div className='row'>
								  			<div className='col-md-4'>
								  				<img src='/images/thumb1.png' width='100%' />
								  			</div>
								  			<div className='col-md-4'>
								  				<div>	
								  					<h4>Elomus Single Product Shop Shopify Theme</h4>
								  					<div>by: John Doe</div>
								  					<div className='cat-item-content'>
								  						asdasdas
								  					</div>
								  				</div>
								  			</div>
								  			<div className='col-md-4'>
								  				<div className='text-center'>
								  					<a href='#' className='btn btn-md btn-primary'>Live Preview</a>
								  				</div>
								  			</div>
								  		</div>
								  </li>
								  <li className="list-group-item">
								  	<div className='row'>
								  			<div className='col-md-4'>
								  				<img src='/images/thumb1.png' width='100%' />
								  			</div>
								  			<div className='col-md-4'>
								  				<div>	
								  					<h4>Elomus Single Product Shop Shopify Theme</h4>
								  					<div>by: John Doe</div>
								  					<div className='cat-item-content'>
								  						asdasdas
								  					</div>
								  				</div>
								  			</div>
								  			<div className='col-md-4'>
								  				<div className='text-center'>
								  					<a href='#' className='btn btn-md btn-primary'>Live Preview</a>
								  				</div>
								  			</div>
								  		</div>
								  </li>
								  <li className="list-group-item">
								  	<div className='row'>
								  			<div className='col-md-4'>
								  				<img src='/images/thumb1.png' width='100%' />
								  			</div>
								  			<div className='col-md-4'>
								  				<div>	
								  					<h4>Elomus Single Product Shop Shopify Theme</h4>
								  					<div>by: John Doe</div>
								  					<div className='cat-item-content'>
								  						asdasdas
								  					</div>
								  				</div>
								  			</div>
								  			<div className='col-md-4'>
								  				<div className='text-center'>
								  					<a href='#' className='btn btn-md btn-primary'>Live Preview</a>
								  				</div>
								  			</div>
								  		</div>
								  </li>
								</ul>
							</div>
	  					</div>
	  					<div className='col-md-3'>
	  						<h4>Filter</h4>
	  					</div>
	  				</div>
	  			</div>
  			</div>
  			</>
  		)
  	}
}


export default CategoryPage