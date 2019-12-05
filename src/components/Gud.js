import React from 'react'

const Gud = (props) =>{
    return(
        <div>
            <p><b>{props.gud.navn}</b></p>
            <p>{props.gud.besk}</p>
        </div>
    )
}

export default Gud