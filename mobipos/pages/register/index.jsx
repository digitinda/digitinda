import React from 'react'
import * as loginapi from '../../lib/services/user-services'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

class RegisterPage extends React.Component  {

	constructor(props) {
    	super(props);
    	this.state = {
    		hasError: false,
    		errorMsg: '',
    		isSubmit: false
    	}
    }

    do_register(e){
    	e.preventDefault()
    	var fullname = e.target.fname.value
    	var email = e.target.email.value
    	var contact = e.target.contact.value
    	var uname = e.target.uname.value
    	var pword = e.target.pword.value
    	
    	this.setState({
    		isSubmit: true
    	})

    	var form = {
    		fullname: fullname,
    		email: email,
    		contact_no: contact,
    		uname: uname,
    		pword: pword
    	}

    	loginapi.do_register(form).then((res) => {
    		if(res.status == false){
    			this.setState({
    				hasError: true,
    				isSubmit: false,
    				errorMsg: res.error
    			})
    		}else{    		
    			MySwal.fire({
					icon: 'success',
					title: "Successfully Registered",
					didClose: () => {
						window.location.href = "/"
					}									
				})  			
    		}
    	})
    }

    render(){

    	return (
    		<div>
	    		<div id="layoutAuthentication">
		            <div id="layoutAuthentication_content" className='mb-4'>
		            	<nav class="navbar navbar-dark bg-primary">
						  <div class="container-fluid">
						    <a class="navbar-brand" href="#">Navbar</a>
						  </div>
						</nav>
		                <main>
		                    <div className="container">
		                        <div className="row justify-content-center">
		                            <div className="col-lg-5">
			                            <form onSubmit={(e) => this.do_register(e)} method='post'>
			                            	<h3 class='text-center my-3 text-white'></h3>
			                                <div className="card rounded-lg mt-5">
			                                    <div className="card-header text-white bg-info"><h3 className="text-center font-weight-light my-4">Register</h3></div>
			                                    <div className="card-body">	
			                                    		{
			                                    			(this.state.hasError) ? 
			                                    			<div class="alert alert-danger" role="alert">
																{ this.state.errorMsg }
															</div> : <span></span>
			                                    		}		                   
			                                            <div className="form-floating mb-3">
			                                                <input className="form-control" name="fname" id="fname" type="text" placeholder="Full Name" />
			                                                <label for="inputEmail">Full Name</label>
			                                            </div>
			                                            <div className="form-floating mb-3">
			                                                <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
			                                                <label for="email">Email</label>
			                                            </div>
			                                            <div className="form-floating mb-3">
			                                                <input className="form-control" name="contact" id="contact" type="number" placeholder="Contact No." />
			                                                <label for="contact">Contact No.</label>
			                                            </div>		
			                                            <div className="form-floating mb-3">
			                                                <input className="form-control" name="uname" id="uname" type="text" placeholder="Username" />
			                                                <label for="contact">Username</label>
			                                            </div>
			                                            <div className="form-floating mb-3">
			                                                <input className="form-control" name="pword" id="pword" type="password" placeholder="Password" />
			                                                <label for="contact">Password</label>
			                                            </div>	                                            			                                            
			                                    </div>
			                                    <div className="card-footer text-center py-3">
			                                        <button className='btn btn-md btn-primary'>Register Now</button>
			                                    </div>
			                                </div>
		                          		</form>
		                            </div>
		                        </div>
		                    </div>
		                </main>
		            </div>
		            <div id="layoutAuthentication_footer">
		                <footer className="py-4 bg-light mt-auto">
		                    <div className="container-fluid px-4">
		                        <div className="d-flex align-items-center justify-content-between small">
		                            <div className="text-muted">Copyright &copy; Digitinda 2024</div>
		                            <div>
		                                <a href="#">Privacy Policy</a>
		                                &middot;
		                                <a href="#">Terms &amp; Conditions</a>
		                            </div>
		                        </div>
		                    </div>
		                </footer>
		            </div>
		        </div>
		    </div>
    	)

    }

}

export default RegisterPage