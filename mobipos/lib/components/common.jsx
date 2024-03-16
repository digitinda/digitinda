import React, { Suspense, useRef, useState, useEffect  } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export const NavBar = (props) => {

	const { toggleDrawer, isOpen } = props
	const [ isOpenMenu, setOpenMenu ] = useState(false)

	const doLogout = () => {
		localStorage.clear()
		window.location.href = "/logout"
	}

	return (
		<nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">			 
	        <a className="navbar-brand ps-3" href="index.html">MobiPOS</a>            
	        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" onClick={(e) => toggleDrawer(!isOpen) }><FontAwesomeIcon icon={faBars} /></button>            
	        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
	            <div className="input-group">
	                <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
	                <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
	            </div>
	        </form>            
	        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
	            <li className="nav-item dropdown">
	                <a className={ (isOpenMenu) ? "nav-link dropdown-toggle show" : "nav-link dropdown-toggle" } id="navbarDropdown" href="#" role="button" onClick={(e) => setOpenMenu(!isOpenMenu) } aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
	                <ul className={ (isOpenMenu) ? "dropdown-menu dropdown-menu-end show" : "dropdown-menu dropdown-menu-end" } aria-labelledby="navbarDropdown" data-bs-popper="static">
	                    <li><a className="dropdown-item" href="#!">Profile</a></li>	                    
	                    <li><hr className="dropdown-divider" /></li>
	                    <li><button className="dropdown-item" onClick={(e) => doLogout() }>Logout</button></li>
	                </ul>
	            </li>
	        </ul>
		</nav>
	)


}

export const SideBar = (props) => {

	return (		
	    <div id="layoutSidenav_nav">
	    	<nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
	            <div className="sb-sidenav-menu">
	                <div className="nav">
	                	<div className="sb-sidenav-menu-heading">Pages</div>
	                	<Link className="nav-link" href="/">
	                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
	                        Dashboard
	                    </Link>	                    
	                    <Link className="nav-link collapsed" href="/categories" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
	                        <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
	                        Categories
	                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
	                    </Link>
	                     <Link className="nav-link collapsed" href="/inventory" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
	                        <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
	                        Inventory
	                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
	                    </Link>
	                     <Link className="nav-link collapsed" href="/categories" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
	                        <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
	                        Menu
	                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
	                     </Link>
	                      <Link className="nav-link collapsed" href="/categories" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
	                        <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
	                        History
	                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
	                     </Link>	                     		                   
	                </div>
	            </div>
	        </nav>
	   	</div>
	)


}


export const Footer = (props) => {

	return (
		<footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">Copyright © Your Website 2023</div>
                    <div>
                        <a href="#">Privacy Policy</a>
                        ·
                        <a href="#">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
	)


}