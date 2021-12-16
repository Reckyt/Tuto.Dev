import React from 'react'
import { Link } from "react-router-dom";

import '../css/Card.css'

function Card({ card }) {
    const { title, picture, path } = card

    return (
        <Link to={{ pathname: `/${path}` }} className='display-card'>
            <h3>{title}</h3>
            <picture>
                <img src={picture} alt="visualisation" />
            </picture>
        </Link>
    )
}

export { Card };