import React from 'react'

export default function Coercion({ javascriptData }) {
    const inf = '<';
    const sup = '>';

    return (
        <div>
            <h3>Coercion</h3>
            <p>
                Si j'utilise un opérateur avec deux types différent la coercion va contraindre un type pour le transformer comme l'autre.
            </p>
            <img src={javascriptData.coercion} alt="Coercion" />
            <p>
                coer sera égal à 12... bizarre non !<br />
                le number va être contraint de se changer en string. Javascript fait de son mieux pour comprendre ce que cette valeur devrait être. <br />
                Avec le + fonctionne comme de la concaténation, on peut "additionner" 2 string, Si l'opérateur avait été -, on ne peut pas soustraire des strings donc la coercion aurait changer la string en number
            </p>
            <img src={javascriptData.coercion2} alt="Coercion" />
            <p>
                Les opérateurs de comparaison =, {inf}, {sup}, et logique ||, &&, quand ils sont utilisés avec des types différents renvois des booléen.
                <br />
                Avec l'associativité et la coercion on peut voir des comportements étranges, par exemple :
            </p>
            <img src={javascriptData.pgq1} alt="Greater than" />
            <p>
                Cela devrait être faux mais renvoi true <br />
                Même précédence pour les deux {inf}, donc on regarde l'associativité : de gauche à droite <br />
                3 {inf} 2 est false ce qui renvoi ceci
            </p>
            <img src={javascriptData.pgq2} alt="Greater than" />
            <p>
                La coercion transforme false en number ce qui donne 0 donc :
            </p>
            <img src={javascriptData.pgq3} alt="Greater than" />
            <p>
                Donc même pour cette comparaison
            </p>
            <img src={javascriptData.pgq4} alt="Greater than" />
            <p>
                D'un point de vue humain, c'est normal mais pour la machine qui exécute le code il se passe ceci : <br />
                1 {inf} 2 est true donc
            </p>
            <img src={javascriptData.pgq5} alt="Greater than" />
            <p>
                La coercion transforme true en number ce qui donne 1 donc :
            </p>
            <img src={javascriptData.pgq6} alt="Greater than" />
            <p>
                Voici des liens vers des tableaux :
            </p>
            <ul>
                <li>
                    <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Operator_Precedence" target='_blank'>précédence et associativité</a>
                </li>
                <li>
                    <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Equality_comparisons_and_sameness" target='_blank'>test d'égalité</a>
                </li>
            </ul>
            <hr />
        </div>
    )
}
