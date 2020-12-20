import React from 'react'
import './more-button.styles.css'

export const MoreButton = ({ handleClick, count, max}) => {
    let buttonText = 'click here to see more shibas!'
    let clickEvent = handleClick;
    if(count >= max) { //if we reach the limit of displayed images, change the text of the button and stop the click event
        buttonText = 'sorry, no more shibas...'
        clickEvent = undefined;
    }
    return(
        <button className='more-button bouncy' onClick={clickEvent} type='button'>{buttonText}</button>
    )
}
