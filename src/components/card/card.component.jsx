import React from 'react'
import './card.styles.css'

export const Card = (props) => {
    return (
     <div className='card-container'>
        <img alt='shiba' src={props.shiba} />
    </div>
    )
}
