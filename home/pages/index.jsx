import React from 'react'
import Image from 'next/image'
import { SliderMain } from './../lib/components/Sliders'
import { Header } from './../lib/components/common'

class MainPage extends React.Component  {


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
              <div className='divider'></div>
              <div className='row my-5 align-items-center'>
                <div className='col-md-6'>
                  <h3>Best Themes and Templates for Web Developers</h3>
                  <p className='fs-5'>Search over 100+ our ready made themes, admin template, react template, and angular template</p>
                  <div className='input-group mb-3'>
                    <input type='text' className='form-control' placeholder='e.g. Wordpress themes, React Admin Template' />                  
                    <button type='button' className='btn btn-md btn-primary'>Search</button>
                  </div>
                </div>
                <div className='col-md-6'>
                  <SliderMain />
                </div>
                
              </div>
          </div>
           <div className='container mt-5 py-5'>
              <h4 className='text-center mb-3'>Themes and Templates</h4>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='card mb-3'>
                      <img src="/images/thumb1.png" className="card-img-top" height="200px"/>
                      <div className="card-body">
                        <h5 className="card-title">WordPress Themes</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Browse</a>
                      </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='card mb-3'>
                      <img src="/images/thumb2.png" className="card-img-top" height="200px"/>
                      <div className="card-body">
                        <h5 className="card-title">Admin Templates</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Browse</a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div id='footer'>
          <div className='container py-5'>
            <div className='row'>
              <div className='col-md-4'>
                  <img src={'/digitinda-logo1.png'} height="50px" />
              </div>
            </div>
          </div>
        </div>
        <div id='copyright'>
          <div className='container'>
            <p className='mb-0 p-2 text-start'>Copyright 2024</p>
          </div>
        </div>
        </>
      )
  }
  
}

export default MainPage