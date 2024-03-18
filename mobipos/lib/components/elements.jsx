import React, { Suspense, useRef, useState, useEffect  } from "react";
import { Transition } from 'react-transition-group';
import * as moment from 'moment'

export const BModal = (props) => {

	const { title, content, footer, is_open, onClose, id } = props
	const nodeRef = useRef(null);
	
	var modal_obj = { _mykey: {
		is_open: is_open
	}}

	if(typeof(id) != 'undefined'){
		modal_obj[id] = {
			is_open: is_open
		}		
	}

	useEffect(() => {
		if(typeof(window) != null){
			console.log(id)
			if(modal_obj[id].is_open == true){			
				document.body.classList.add('modal-open')
				const div = document.createElement("div");
				div.classList.add('modal-backdrop', 'fade', 'show')
				document.body.appendChild(div)

			}
			else if(modal_obj[id].is_open == false){
				if(document.body.classList.contains('modal-open')){
					document.body.classList.remove('modal-open')
					document.body.querySelector('.modal-backdrop').remove()
				}
			}			
		}
		
	})

	const transitionClass = {
	  entering: { classNames: 'modal fade', style: { display: 'block '} },
	  entered:  { classNames: 'modal fade show', style: { display: 'block '} },
	  exiting:  { classNames: 'modal fade show', style: { display: 'block '} },
	  exited:  { classNames: 'modal fade', style: { display: 'none '} },
	};


	return (
		<Transition nodeRef={nodeRef} in={is_open} timeout={500}>
		 	{state => (
				<div className={transitionClass[state].classNames} style={...transitionClass[state].style} key={id}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className='modal-header'>
								<h5 className="modal-title" id="staticBackdropLabel">{title}</h5>
							</div>
							<div className="modal-body">
								{ props.children }
							</div>
							<div className='modal-footer'>
								{footer}
								<button type='button' className='btn btn-md btn-warning' onClick={(e) => onClose(e) }>Close</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</Transition>

	)

}


export const BInputText = (props) => {

	const { name, label, error_msg, value, onChange, is_valid, id, type } = props
	return (
		<div className="form-floating mb-3">
	      <input key={'text-' + id} type={(typeof(type) != 'undefined') ? type :  "text" } name={name} defaultValue={value} className={(is_valid) ? "form-control": "form-control is-invalid" } id="floatingInput" placeholder={label} />
	          <label htmlFor="floatingInput">{label}</label>
	          <div className="invalid-feedback">
	              { error_msg }
	            </div>
	    </div>
	)

}

export const BTextField = (props, ref) => {
	
	const { value, label, name, is_valid, type, id } = props

	return (
		<div className="form-floating mb-3">
	      <textarea key={'textarea-' + id} name={name} defaultValue={value} className={(is_valid) ? "form-control": "form-control is-invalid" } />
	      <label htmlFor="floatingInput">{label}</label> 
	      <div className="invalid-feedback">
	          This field is required
	      </div>  
	    </div>
	)

}


export const SelectTag = (props) => {

	const { id, label, onChange, opts, value, is_valid } = props

	if(!opts){
		return (
			<div className="form-floating mb-3">
			  <select className="form-select" id={id} defaultValue="" name={id}>
			    <option value="">Empty</option>
			  </select>
			  <label htmlFor={id}>{label}</label>
			</div>
		)
	}

	return (
		<div className="form-floating mb-3">
		  <select className={(is_valid) ? "form-select": 'form-select is-invalid'} name={id} id={id} value={value}>
		    <option value="">Please Select</option>
		    {
		    	opts.map((item, index) => {				    
		    		return <option value={item.value} key={'opt-' + index}>{item.label}</option>
		    	})
		    }
		  </select>
		  <label htmlFor={id}>{label}</label>
		  <div className="invalid-feedback">
		  	This field is required
		  </div>
		</div>
	)

}
