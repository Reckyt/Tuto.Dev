import React from 'react';

import './DisplayContent.css';

export default function DisplayContent({ item }) {
    return (
        <div className="card-display">
            <div className="header-display">
                <h4>{item.property}</h4> <p>{item.description}</p>
            </div>
            <hr />
            <p>Dont les valeurs possibles sont :</p>
            <div className="list-display">
                <ul>
                    {item.values.map((value) => {
                        return (
                            <li>
                                <span>{value}</span>
                            </li>
                        );
                    })}
                </ul>
                {item.image ? <img src={item.image} alt="exemple" /> : null}
            </div>
        </div>
    );
}
