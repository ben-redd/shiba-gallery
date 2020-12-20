import React from 'react'
import './card.styles.css'

export const Card = ({ shiba }) => {
    return (
     <div className='card-container'>
        <img alt='shiba' src={shiba} />
    </div>
    )
}



