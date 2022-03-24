import React from 'react';

import Card from './Card.jsx';
import { cardsData } from '../../assets/data/cardData';

function Home() {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: 100,
                }}
            >
                <h1>Tuto.dev</h1>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    justifyContent: 'center',
                }}
            >
                {cardsData.map((card, i) => (
                    <Card key={i} card={card} />
                ))}
            </div>
        </div>
    );
}

export default Home;
