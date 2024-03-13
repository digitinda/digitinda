import React, { Suspense, createRef, useState, useRef  } from "react";
import { NavBar, SideBar, Footer } from '../components/common'
import { useRouter } from 'next/navigation'

export const MainLayout = (props) => {

	const [ is_checking, setChecking ] = useState(true)
	const [ is_login, setLogin ] = useState(true)
	const [ isOpen, setOpen ] = useState(false)

	const router = useRouter()
	const active_sidebar = useRef(null)

	const setActiveBar = (e) => {
		var elem = active_sidebar.current
		if(!elem.classList.contains('active-sidebar')){
			elem.classList.add('active-sidebar')
		}else{
			elem.classList.remove('active-sidebar')
		}
		
	}

	return (
		<>
		<div  className={(isOpen) ? 'sb-sidenav-toggled': '' } >
			<div id="layoutSidenav">
				<NavBar toggleDrawer={(e) => setOpen(e) } isOpen={isOpen} />
				<SideBar />
				<div id="layoutSidenav_content">
			         <main>
			             <div className="container-fluid px-4">
			               	{ props.children }
			             </div>
			         </main>
			         <Footer />
				</div>
			</div>
		</div>
		</>
	)

}