import React, { Suspense, useRef, useState, useEffect  } from "react";


export const Header = (props) => {

	return (
		<>
		<div className='top-nav'>

        </div>
		<header className='header' id='header'>
         <div className='text-center'>
            <img src={'/digitinda-logo1.png'} height="70px" />
          </div>
           <div className='container'>
            <div className='row'>
              <div className='col-md-10'>
                  <nav className='navbar navbar-expand-lg navbar-light bg-light"'>
                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">HTML</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">WordPress</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Angular</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">VueJS</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">ReactJS</a>
                        </li>
                         <li class="nav-item">
                          <a class="nav-link" href="#">Admin Template</a>
                        </li>
                     </ul>
                  </nav>
              </div>
            </div>
          </div>
        </header>
       </>
	)

}