import React from 'react';

export default function Execution({ javascriptData }) {
    return (
        <div>
            <h3>Exécution</h3>
            <div className="container-chapter">
                <p>
                    Le code javascript se fonctionne en 2 étapes :
                    <br />
                    Tout d'abord la <b>compilation</b>, qui va traduire ce que
                    l'on a écrit en javascript dans un autre langage que
                    l'ordinateur (la partie hardware) va pouvoir comprendre
                    <br />
                    Ensuite <b>L'execution</b> du code, qui se fait ligne par
                    ligne !
                </p>
                <div className="container-image-align">
                    <img src={javascriptData.execution} alt="execution" />
                    <img
                        src={javascriptData.executionOutput}
                        alt="execution-output"
                    />
                </div>
                <ul>
                    <li>
                        Les fonctions sont toutes référencées à la compilation
                        du code, peu importe où elles sont placées, donc b()
                        peut être invoquer/appeler avant sa définition.
                        <br />
                    </li>
                    <li>
                        Pour les variables, la déclaration est référencée mais
                        pas l'assignation. C'est pour cela que le première
                        affichage de a sera égal à "undefined" et ne renvoi pas
                        d'erreur.
                    </li>
                </ul>
            </div>
            <hr />
        </div>
    );
}
