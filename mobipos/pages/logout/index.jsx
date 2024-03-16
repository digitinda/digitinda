import React from 'react'
import Image from 'next/image'

class LogoutPage extends React.Component  {

	constructor(props) {
    	super(props); 

    }


    componentDidMount(){
    	if(typeof(window) != 'undefined'){
    		localStorage.clear();
    	}
    }

    render(){
    	return(
    		<div>Thank you for using MobiPOS</div>
    	)
    }

}

export default LogoutPage