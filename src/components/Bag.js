import React from 'react'
import '../style/Bag.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

library.add( faBriefcase )


const Bag = () => {
    return (
        <div className='bag'>
            <FontAwesomeIcon icon="briefcase" id="briefcase" /> 
            <h1>
                Heading title one
            </h1>
            <p>
               Nunc accumsan hendrerit nunc, ac venenatis magna facilisis quis. <br /> Ut sit amet mi ac neque sodales facilisis. Nullam tempus fermentum lorem nec interdum. Ut id orci id sapien imperdiet vehicula. Etiam quis dignissim ante. Donec convallis tincidunt ligula, ac luctus mi interdum a.
            </p>
        </div>
    )
}

export default Bag