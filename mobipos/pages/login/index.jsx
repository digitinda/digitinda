import React from 'react'
import * as loginapi from '../../lib/services/user-services'

class LoginPage extends React.Component  {

	constructor(props) {
    	super(props);
    	this.state = {
    		hasError: false,
    		errorMsg: '',
    		isSubmit: false
    	}
    }

    do_login(e){
    	e.preventDefault()
    	var uname = e.target.username.value
    	var pword = e.target.password.value
    	
    	this.setState({
    		isSubmit: true
    	})

    	loginapi.do_login(uname, pword).then((res) => {
    		if(res.status == false){
    			this.setState({
    				hasError: true,
    				isSubmit: false,
    				errorMsg: res.error
    			})
    		}else{
    			
    			var token = res.data.token
    			localStorage.setItem('token', token)
    			window.location.href = "/"
    			    			
    		}
    	})
    }

    render(){

    	return (
    		<div class="bg-primary">
	    		<div id="layoutAuthentication">
		            <div id="layoutAuthentication_content" className='mb-4'>
		                <main>
		                    <div className="container">
		                        <div className="row justify-content-center">
		                            <div className="col-lg-5">
			                            <form onSubmit={(e) => this.do_login(e)} method='post'>
			                            	<h3 class='text-center my-3 text-white'>MobiPOS</h3>
			                                <div className="card shadow-lg border-0 rounded-lg mt-1">
			                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
			                                    <div className="card-body">	
			                                    		{
			                                    			(this.state.hasError) ? 
			                                    			<div class="alert alert-danger" role="alert">
																{ this.state.errorMsg }
															</div> : <span></span>
			                                    		}		                   
			                                            <div className="form-floating mb-3">
			                                                <input className="form-control" id="username" type="text" placeholder="Username" />
			                                                <label for="inputEmail">Username</label>
			                                            </div>
			                                            <div className="form-floating mb-3">
			                                                <input className="form-control" id="password" type="password" placeholder="Password" />
			                                                <label for="inputPassword">Password</label>
			                                            </div>
			                                            <div className="form-check mb-3">
			                                                <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
			                                                <label className="form-check-label" for="inputRememberPassword">Remember Password</label>
			                                            </div>
			                                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
			                                                <a className="small" href="password.html">Forgot Password?</a>
			                                                {
			                                                	(!this.state.isSubmit) ? <button className="btn btn-primary">Login</button> : <span>Submitting...</span>
			                                                }
			                                            </div>			                                        
			                                    </div>
			                                    <div className="card-footer text-center py-3">
			                                        <div className="small"><a href="register.html">Need an account? Sign up!</a></div>
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
		                            <div className="text-muted">Copyright &copy; Your Website 2023</div>
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

export default LoginPage