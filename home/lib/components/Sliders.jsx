import React, { Suspense, useRef, useState, useEffect   } from "react";
import { Transition, SwitchTransition, CSSTransition } from 'react-transition-group';

export const SliderMain = (props) => {

	const slider = useRef(null)
	const [slideIndex, setSliderIndex] = useState(0)
	const [ hasEnter, setEnter ] = useState(false)

	const sliderItems = [
		<SliderItem bgColor={'red'} />,
		<SliderItem bgColor={'blue'}/>,
		<SliderItem bgColor={'green'} />,
		<SliderItem bgColor={'yellow'} />
	]

	const onNav = (index) => {
		setSliderIndex(index)
	}

	return (
		<div className='slider-main'>
			<div className='slider-wrapper'>
				<div id='slider' className='slider'>					
					 <SwitchTransition >
					     <CSSTransition
					       key={'slider-item-' + slideIndex}
					       nodeRef={slider}
					       classNames='fade'
					       appear={true}
					       onEntered={() => {

					       		var index = slideIndex + 1					
							
								if(index > sliderItems.length - 1 ){
									index = 0
								}	

								setSliderIndex(index)
					       }}
					       timeout={{
							 appear: 10000,
							 enter: 10000,
							 exit: 500,
							}}
					     >
					     	<div className='slider-items' ref={slider}>{sliderItems[slideIndex]}</div>
					       
					     </CSSTransition>
					   </SwitchTransition>		
					   <div className='slider-nav'>
					   		<div className='slider-nav-items'>
					   			{
					   				sliderItems.map((item, index) => {
					   					return (
					   						<div className={ (index == slideIndex) ? 'nav-item active': 'nav-item' } key={'nav-' + index}><button className='nav-btn' onClick={(e) => onNav(index)}></button></div>
					   					)					   					
					   				})
					   			}
					   		</div>
					   </div>		
				</div>
			</div>			
		</div>
	)


}

const SliderItem = (props) => {
	const { bgColor } = props

	return (
		<div style={{backgroundColor: bgColor, width: '100%', height: '300px'}}></div>
	)

}