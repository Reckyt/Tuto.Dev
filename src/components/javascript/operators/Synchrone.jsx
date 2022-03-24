import React from 'react';

export default function Synchrone({ javascriptData }) {
    return (
        <div>
            <h3>Synchrone</h3>
            <div>
                <p>
                    Javascript foncionne de façon synchrone, c"est à dire que
                    les fonctions se mettent l'une après l'autre dans une file
                    d'attente, tant que les premières fonctions ne sont pas
                    finies les suivantes ne seront pas lancés, c'est chacun son
                    tour. Donc une fonction que prend beaucoup de temps va
                    ralentir le fonctionnement de toutes les autres
                    <br />
                    <br />
                    Dans l'exemple ici, si je clique pendant que la première
                    fonction de 3 secondes est en cours, le console.log de mon
                    click event ne s'affichera qu'à la toute fin
                </p>
                <img src={javascriptData.synchrone} alt="synchrone" />
            </div>
            <hr />
        </div>
    );
}
