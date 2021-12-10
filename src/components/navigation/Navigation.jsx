import React from 'react'

import archi from '../../assets/pictures/router/architecture.png'
import imp from '../../assets/pictures/router/impRouter.png'

import "./Navigation.css"

function Navigation() {

    return (
        <div className='container--nav'>
            <h1>Installation de react-router-dom</h1>
            <div>
                <ul>
                    <li>
                        <p>
                            dans le terminal lancer la command line (CLI) : <i>npm install react-router-dom</i>
                            <br />
                            <br />
                            <div style={{ display: 'flex' }}>
                                <p style={{ marginRight: 10 }}>
                                    dans le fichier app.js importer cet import :<br />
                                    <b>Routes</b> à remplacer le <b>Switch</b> depuis la version 6 !
                                </p>
                                <img src={imp} alt="import react-router-dom" />
                                <br />
                            </div>
                        </p>
                    </li>
                    <li>
                        <p>
                            Dans le render du fichier App.js on peut mettre nos routes ainsi :
                        </p>
                        <img src={archi} alt="architecture de route" />
                    </li>
                    <li>
                        <p>Maintenant que les routes sont déclarées, on peut y faire appel. Par exemple dans notre composant <b>Header</b>, on importe <b>Link</b> from <b>'react-router-dom'</b> et on créé notre  </p>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Navigation;