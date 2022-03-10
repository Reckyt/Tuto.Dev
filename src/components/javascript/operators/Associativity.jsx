import React from 'react'

export default function Associativity({ javascriptData }) {
    return (
        <div>
            <h3>Précédence & Associativité</h3>
            <p>
                les opérateurs sont des fonctions qui retournent une valeur, =, -, +, etc, prennent tous 2 paramètres et renvoi une valeur. <br />
                il faut donc faire ATTENTION à la précédence et l'associativité des opérateurs. <br />
                <ul>
                    <li>La précédence, comme en mathématique, c'est la priorité des opérations entre elles.</li>
                    <li>l'associativité, c'est le sens de lecture qui va être utiliser, si la prédédence ne peut être défini</li>
                </ul>
            </p>
            <img src={javascriptData.associativité} alt="associativité" />
            <p>
                Pour a = b = c c'est le même opérateur d'assignation =, on ne peut donc pas définir le précédence. <br />
                L'associativité de l'opérateur d'assignement "=" va de droite à gauche, donc ici on va commencé par la droite :<br/>
                b = c, ce qui donne b = 4, parceque c = 4 <br />
                l'opérateur = qui est une fonction renvoi la valeur 4, l'execution du code continue donc ainsi :<br/>
                a = 4
                <br />
                <br />
                On se retrouve avec a, b et c égal à 4.
            </p>
            <hr />
        </div>
    )
}
