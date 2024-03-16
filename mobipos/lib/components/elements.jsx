import React, { Suspense, useRef, useState, useEffect  } from "react";
import { Transition } from 'react-transition-group';
import * as moment from 'moment'

export const BModal = (props) => {

	const { title, content, footer, is_open, onClose } = props
	const nodeRef = useRef(null);

	useEffect(() => {
		if(typeof(window) != null){

			if(is_open){			
				document.body.classList.add('modal-open')
				const div = document.createElement("div");
				div.classList.add('modal-backdrop', 'fade', 'show')
				document.body.appendChild(div)

			}
			else{
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
				<div className={transitionClass[state].classNames} style={...transitionClass[state].style}>
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
								<button type='button' className='btn btn-md btn-warning' onClick={(e) => onClose() }>Close</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</Transition>

	)

}


export const BInputText = (props) => {

	const { name, label, error_msg, value, onChange, is_valid, id } = props

	return (
		<div className="form-floating mb-3">
	      <input key={'text-' + id} type="text" name={name} defaultValue={value} className={(is_valid) ? "form-control": "form-control is-invalid" } id="floatingInput" placeholder={label} />
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