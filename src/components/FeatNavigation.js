import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../style/FeatNavigation.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faHeart, faLeaf, faUmbrella, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'

library.add( faBriefcase, faHeart, faLeaf, faUmbrella, faWindowMaximize )

class FeatNavigation extends Component {
    constructor() {
        super()

        this.state = {
            links: [
                {
                    to: '/Bag',
                    name: "Bag",
                    icon: "briefcase"
                 },               
                {
                    to: '/Heart',
                    name: "Heart",
                    icon: "heart"
                 },
                 {
                    to: '/Leaf',
                    name: "Leaf",
                    icon: "leaf"
                 },
                 {
                    to: '/Umbrella',
                    name: "Umbrella",
                    icon: "umbrella"
                 },
                 {
                    to: '/Window',
                    name: "Window",
                    icon: "window-maximize"
                 }
            ]
        }
    }

    

    render() {
        const link = this.state.links.map((item, index) => {
            return (
                <NavLink
                    key={index}
                    to={item.to}
                    className="featLink" 
                >
                   <FontAwesomeIcon icon={item.icon} className="featIcon" />
                    <p className="featDescr" >
                       {item.name}
                    </p>
                </NavLink>
            )
        })
        return (
            <div className='featNav'>
                    <div className='featLinks'>
                        {link}
                    </div>
            </div>
        )
    }
}

export default FeatNavigation