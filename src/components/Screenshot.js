import React, { Component } from 'react'
import '../style/Screenshot.scss'

import screenImg from '../assets/screenImg.png'
import { Animated } from "react-animated-css";


class Screenshot extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return(
            <div className="screenshot">
                <div className="screenContainer">
                    <div className="screenText">
                        <Animated animationIn="zoomInLeft" animationOut="fadeOut" isVisible={true}>
                            <h1> Onec ultrices ultricies tellus perfect screens here </h1>
                            <hr />
                            <h5> Duis bibendum diam non erat facilisis tincidunt. </h5>
                            <p> Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas orci in quam sollicitudin aliquet.  </p>
                            <button> learn more </button>
                        </Animated>
                    </div>
                    
                    <div className='screenImg'>
                        <Animated animationIn="zoomInRight" animationOut="fadeOut" isVisible={true}>
                            <img 
                                src={screenImg} 
                                alt={"screenImg"}   
                                width="70%"
                                height="450px"
                            />
                        </Animated>
                    </div>
                </div>
            </div>
        )
    }
}

export default Screenshot