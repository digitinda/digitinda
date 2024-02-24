import React from 'react'
import Image from 'next/image'
import { SliderMain } from './../lib/components/Sliders'

class MainPage extends React.Component  {


  constructor(props) {
    super(props);    
  }

  componentDidMount(){      

  }

  render(){        

      return (
        <div className='container-wrapper'>
            <header className='header' id='header'>
              <div className='top-nav'>

              </div>
          </header>
          <div className='container'>
              <div className='row'>
                <div className='col-md-3'>
                  <div id="logo-wrapper">
                      <img src={'/digi-logo.png'} height="100px" />
                      <div className='card'>
                        <div className='card-header'><h5 className='card-title mb-0 text-center'>Categories</h5></div>
                        <div className='card-body'>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><a href="#">All Items</a></li>
                            <li className="list-group-item"><a href="#">Admin Dashboard</a></li>
                            <li className="list-group-item"><a href="#">Angular Template</a></li>
                            <li className="list-group-item"><a href="#">ReactJS Template</a></li>
                            <li className="list-group-item"><a href="#">HTML</a></li>
                            <li className="list-group-item"><a href="#">JQuery</a></li>
                          </ul>
                        </div>
                      </div>
                  </div>
                </div>
                <div className='col-md-9'>
                <div className='container mt-2'>
                  <nav className="navbar navbar-expand-lg">
                       <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                           <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                              <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">Graphics</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">Video</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">Audio</a>
                              </li>
                          </ul>
                        </div>                     
                      </nav>
                   </div>
                   <div className="row">
                    <div className='col-md-6'>
                       <div className='container mt-2'>
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search Template" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                              <button className="btn btn-md btn-primary" type="button">Search</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <SliderMain />
                </div>
              </div>
          </div>
          <div className='container mt-5'>
              <h4 className='text-center mb-3'>See Latest Templates</h4>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='card mb-3'>
                      <img src="/blank-image.jpg" class="card-img-top" height="200px"/>
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='card mb-3'>
                      <img src="/blank-image.jpg" class="card-img-top" height="200px"/>
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='card mb-3'>
                      <img src="/blank-image.jpg" class="card-img-top" height="200px"/>
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='card mb-3'>
                      <img src="/blank-image.jpg" class="card-img-top" height="200px"/>
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='card mb-3'>
                      <img src="/blank-image.jpg" class="card-img-top" height="200px"/>
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='card mb-3'>
                      <img src="/blank-image.jpg" class="card-img-top" height="200px"/>
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      )
  }
  
}

export default MainPage