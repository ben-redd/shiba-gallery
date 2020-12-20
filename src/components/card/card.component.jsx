import React from 'react'
import './card.styles.css'

export const Card = ({ shiba }) => {
    console.log('card working')
    return (
     <div className='card-container'>
        <img alt='shiba' src={shiba} />
    </div>
    )
}



