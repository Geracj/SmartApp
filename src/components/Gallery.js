import React, { Component } from 'react'
import '../style/Gallery.scss'
import Slider from "react-slick";

import galleryImg from '../assets/galleryImg.png'
import { Animated } from "react-animated-css";


class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            slides: [
                {
                    img: `${galleryImg}`,
                    text: 'Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae, porta at arcu.'
                },
                {
                    img: `${galleryImg}`,
                    text: 'Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae, porta at arcu.'
                },
                {
                    img: `${galleryImg}`,
                    text: 'Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae, porta at arcu.'
                },
                {
                    img: `${galleryImg}`,
                    text: 'Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae, porta at arcu.'
                },
                {
                    img: `${galleryImg}`,
                    text: 'Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae, porta at arcu.'
                }
            ]
        }
    }

    render() {
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
                  <div className="gallerySlide" key={index}>
                    <img src={item.img} alt={"item.img"}/>
                    <p> {item.text} </p>
                  </div>
              )
          })
        return (
            <div className="gallery">
                <div className="galleryContainer">
                    <div className='galleryTitle'>
                        <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
                            <h1> Our Latest screenshots gallery </h1>
                            <p> Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas orci in quam sollicitudin aliquet.  </p>
                        </Animated>
                    </div>
                    <div className="gallerySlider">
                        <Animated animationIn="zoomInUp" animationOut="fadeOut" isVisible={true}>
                            <Slider {...settings}>
                                    { slides }
                            </Slider>
                        </Animated>
                    </div>
                </div>
            </div>
        )
    }
}


export default Gallery