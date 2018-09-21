import React, { Component } from 'react'
import '../style/Home.scss'
import headerPhone from '../assets/headerPhone.png'

import { Animated } from "react-animated-css";

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='homeContainer'>
                    <div className='homeWrap'>

                        <div className='homeText'>
                            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                                <h1> Perfect app landing page </h1>
                                <h5> Duis bibendum diam </h5>
                                <p> Donec elementum mollis magna id aliquet. Etiam eleifend urna eget sem 
                                sagittis feugiat. Pellentesque habitant morbi tristique senectus et 
                                netus et malesuada fames ac turpis egestas. </p>
                                <button>DOWNLOAD</button>
                          </Animated>

                        </div>

                    <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                        <div className="homeImg">
                                <img  
                                    src={headerPhone} 
                                    alt={"headerPhone"} 
                                    width="100%"
                                />
                        </div>
                        </Animated>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home