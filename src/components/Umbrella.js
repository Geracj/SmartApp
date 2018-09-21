import React from 'react'
import '../style/Umbrella.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrella } from '@fortawesome/free-solid-svg-icons'

library.add( faUmbrella )

const Umbrella = () => {
    return (
        <div className='umbrella'> 
            <FontAwesomeIcon icon="umbrella" id="umbrella" /> 
            <h1>
                Heading title one
            </h1>
            <p>
               Nunc accumsan hendrerit nunc, ac venenatis magna facilisis quis. Ut sit amet mi ac neque sodales facilisis. Nullam tempus fermentum lorem nec interdum. Ut id orci id sapien imperdiet vehicula. Etiam quis dignissim ante. Donec convallis tincidunt ligula, ac luctus mi interdum a.
            </p>
        </div>
    )
}

export default Umbrella