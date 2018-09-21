import React, { Component } from 'react'
import '../style/Navigation.scss'
import { NavLink } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faPhoneSquare, faEnvelope, faBars, faTimes )

class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            show: true
        }
    }

    showMenu = () => {
        const x = document.querySelector('#navigation')

        if (x.className === 'navLinks') {
            x.className += " responsive"
        } else {
            x.className = 'navLinks'
        }

        this.setState({
            show: !this.state.show
        })
    }



    render() {
        return (
            <div className='navigation'>
                <div className='navContainer'>
                    <h1>Smallapps</h1>  
                    <div className='navLinks' id="navigation">
                        <NavLink className='navLink' to="/" > Home </NavLink>
                        <NavLink className='navLink' to="/features" > Features </NavLink>
                        <NavLink className='navLink' to="/screenshot" > Screenshot </NavLink>
                        <NavLink className='navLink' to="/gallery" > Gallery </NavLink>
                        <NavLink className='navLink' to="/contact" > Contact </NavLink>
                    </div>
                    <a className="icon" onClick={this.showMenu.bind(this)}> 
                     <FontAwesomeIcon id="icon" icon={this.state.show ? 'bars' : 'times'}/>         
                    </a>
                </div>
                <div className='navCont'>
                    <div className='navNum'>
                    <FontAwesomeIcon id='navPhone' icon="phone-square" />
                        <p>+123123123</p>
                    </div>
                    <div className='navEmail'>
                        <FontAwesomeIcon id='navEmail' icon="envelope" />
                        <p> example@gmail.com </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation