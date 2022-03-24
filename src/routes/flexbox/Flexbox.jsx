import React from 'react';

import DisplayContent from './DisplayContent';
import { flexboxData } from '../../assets/data/flexboxData';

import './Flexbox.css';

export default function Flexbox() {
    return (
        <div className="container flexbox">
            <h1>Flexbox CSS</h1>
            <div>
                <p>
                    Avec les Flexbox on ne raisonne plus en <b>block</b> ou en{' '}
                    <b>inline</b>, mais en "modèle de boite flexible" dont les 4
                    possibilités d'arrangements sont :
                </p>
                <ol>
                    <li>Distribution des éléments horizontale et verticale</li>
                    <li>Alignements et centrages</li>
                    <li>Réorganisation des éléments</li>
                    <li>Gestion des espaces disponibles</li>
                </ol>
            </div>
            <p>
                L'outils <b>flexbox</b> s'applique au conteneur parent pour
                gérer les items qui y sont contenu.
            </p>
            <p>Les propriétés sont :</p>
            <div className="container-display">
                {flexboxData.map((item) => (
                    <DisplayContent item={item} />
                ))}
            </div>
        </div>
    );
}
