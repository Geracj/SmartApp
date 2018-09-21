import React, { Component } from 'react'
import '../style/Features.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Animated } from "react-animated-css";

import Heart from './Heart'
import Bag from './Bag'
import Leaf from './Leaf'
import Window from './Window'
import Umbrella from './Umbrella'
import FeatNavigation from './FeatNavigation'

class Features extends Component {
    render() {
        return (
            <div className="feat">
                <div className='featTitle'>
                    <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
                        <h1>
                            Heading Feature title goes here
                        </h1>
                        <p>
                            Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas orci in quam sollicitudin aliquet.
                        </p>
                    </Animated>
                </div>
                <BrowserRouter>
                        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                            <div className="featContainer">
                                    <FeatNavigation />
                                    <Switch className="featLinks">
                                        <Route className="featLink" path='/heart' component={ Heart } />
                                        <Route className="featLink" path='/bag' component={ Bag } />
                                        <Route className="featLink" path='/leaf' component={ Leaf } />
                                        <Route className="featLink" path='/window' component={ Window } />
                                        <Route className="featLink" path='/umbrella' component={ Umbrella } />
                                    </Switch>
                            </div>
                        </Animated>
                </BrowserRouter>
            </div>
        )
    }
}

export default Features