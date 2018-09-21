import React, { Component } from 'react'
import '../style/Contact.scss'
import contactImg from '../assets/contactImg.png'
import Slider from "react-slick";

import { Animated } from "react-animated-css";

import sayImg1 from '../assets/sayImg1.png'
import sayImg2 from '../assets/sayImg2.png'
import sayImg3 from '../assets/sayImg3.png'

import dots from '../assets/dots.png'
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add( faEnvelope)


class Contact extends Component {
    constructor() {
        super()
        this.state = {
            slides: [
                {
                    img: `${sayImg1}`,
                    text: '“ It’s official – I love this app, I couldn’t be without it now.',
                    title: '- Ron Burgundy'
                },
                {
                    img: `${sayImg2}`,
                    text: '“ It’s official – I love this app, I couldn’t be without it now.',
                    title: '- Ann Smith'
                },
                {
                    img: `${sayImg3}`,
                    text: '“ It’s official – I love this app, I couldn’t be without it now.',
                    title: '- John Doe'
                }
            ],
            socials: [ `${facebook}`, `${twitter}`, `${google}`, `${dots}`, `${youtube}`],
            links: [ 'Contact', 'Twitter', 'Press', 'Support', 'Developers', 'Privacy' ]
        }
    }

    render( ) {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            draggable: true,
            fade: true,
            pauseOnDotsHover: true,
            pauseOnHover: true,
        }

          const slides = this.state.slides.map((item, index) => {
              return (
                  <div className="saySlide" key={index}>
                    <img src={item.img} alt={"item.img"}/>
                    <p> {item.text} </p>
                    <h6> {item.title} </h6>
                  </div>
              )
          })

          const social = this.state.socials.map( (item, index) => {
              return (
                  <div className="footerSocial" key={index}>
                    <a href="#">
                        <img src={item} />
                    </a>
                  </div>
              )
          })

          const links = this.state.links.map( (item, index) => {
              return(
                  <div className="footerLink" key={index} >
                    <a href="#"> {item} </a>
                  </div>
              )
          })
        return (
            <div>

                <div className='contact'>
                    <div className="contactContainer">
                        <div className='contactImg'>
                            <Animated animationIn="zoomInLeft" animationOut="fadeOut" isVisible={true}>
                                <img 
                                    src={contactImg} 
                                    alt={"contactImg"}   
                                    width="70%"
                                    height="450px"
                                />
                            </Animated>
                        </div>
                        <div className="contactText">
                            <Animated animationIn="zoomInRight" animationOut="fadeOut" isVisible={true}>
                                <h1> Onec ultrices ultricies tellus perfect screens here </h1>
                                <hr />
                                <h5> Duis bibendum diam non erat facilisis tincidunt. </h5>
                                <p> Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas orci in quam sollicitudin aliquet.  </p>
                                <button> learn more </button>
                            </Animated>
                        </div>
                        
                    </div>
                </div>

                <div className="say">
                    <h1> What people say about us </h1>
                    <div className='saySlider'>
                        <Slider {...settings}>
                            { slides }
                        </Slider>
                    </div>
                </div>

                <div className="form">
                    <div className='formTitle'>
                        <FontAwesomeIcon icon='envelope' id='formIcon' />         
                        <h1> Subscribe our Newsletter </h1>
                    </div>
                    <div className="formInput">
                        <form>
                            <input 
                                type='text' 
                                placeholder="Enter your Email"
                                id="formInput"
                             />
                             <input type="submit" id="formSubmit" value="Submit" />
                        </form>
                    </div>
                </div>

                <div className="footer">
                    <h1> Say Hi, Get In Touch </h1>
                    <div className="footerContainer">
                        { social }
                    </div>
                    <div className="footerWrap">
                        { links }
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact