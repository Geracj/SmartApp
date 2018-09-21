import React from 'react'
import '../style/Leaf.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

library.add( faLeaf )


const Leaf = () => {
    return (
        <div className="leaf">
            <FontAwesomeIcon icon="leaf" id="leaf" /> 
            <h1>
                Heading title one
            </h1>
            <p>
               Nunc accumsan hendrerit nunc, ac venenatis magna facilisis quis. Ut sit amet mi ac neque sodales facilisis. Nullam tempus fermentum lorem nec interdum. Ut id orci id sapien imperdiet vehicula. Etiam quis dignissim ante. Donec convallis tincidunt ligula, ac luctus mi interdum a.
            </p>
        </div>
    )
}

export default Leaf