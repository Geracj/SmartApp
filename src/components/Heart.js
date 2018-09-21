import React from 'react'
import '../style/Heart.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add( faHeart )


const Heart = () => {
    return (
        <div className='heart'>
            <FontAwesomeIcon icon="heart" id="heart" /> 
            <h1>
                Heading title one
            </h1>
            <p>
               Nunc accumsan hendrerit nunc, ac venenatis magna facilisis quis. Ut sit amet mi ac neque sodales facilisis. Nullam tempus fermentum lorem nec interdum. Ut id orci id sapien imperdiet vehicula. Etiam quis dignissim ante. Donec convallis tincidunt ligula, ac luctus mi interdum a.
            </p>
        </div>
    )
}

export default Heart