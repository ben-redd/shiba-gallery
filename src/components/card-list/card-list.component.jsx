import React from 'react';
import Shortid from 'shortid';

import { Card } from '../card/card.component'
import './card-list.styles.css';

export const CardList = ({count, shibas}) => {
    console.log(`count ${count}`)
    console.log(shibas)
    let content = [];
    for(let i = 0; i < count; i++) {
        content.push(shibas[i])
    }
    return(
    <div className='card-list'>
        {content.map((shiba) => (
            <Card key={Shortid.generate()} shiba={shiba} />
        ))} 
    </div>
    )
}


