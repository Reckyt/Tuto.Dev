import React from 'react'

export default function DefaultValue({ javascriptData }) {
    return (
        <div>
            <h3>Valeur par défaut</h3>
            <p>On peut utiliser ces principes pour définir des valeurs par defaut <br /> <br />

                L'opérateur || permet ici de vérifier si la valeur de name a déjà été définie <br />
                si name avait été égale à une string vide, zero ou null l'opérateur || l'aurait contraint (via le principe de coercion) en booleén égal à false. <br />
                name prend donc la valeur par défaut défini après.</p>
            <img src={javascriptData.defaut} alt="associativité" />
        </div>
    )
}
