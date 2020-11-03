import React from 'react';
import Shortid from 'shortid';

import { Card } from '../card/card.component'
import './card-list.styles.css';

export const CardList = props => {
    let content = [];
    for(let i = 0; i < props.count; i++) {
        content.push(props.shibas[i])
    }
    return(
    <div className='card-list'>
        {content.map((shiba) => (
            <Card key={Shortid.generate()} shiba={shiba} />
            ))} 
    </div>
    )
}


