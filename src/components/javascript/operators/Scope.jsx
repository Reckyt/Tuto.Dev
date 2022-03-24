import React from 'react';

export default function Scope({ javascriptData }) {
    return (
        <div>
            <h3>Scope</h3>
            <p>
                {' '}
                L'execution peut avoir lieu dans différents contexte selon
                l'emplacement des déclarations, on appel ça le scope.
                <br />
                Le scope est la portée de ce contexte où la variable peut être
                atteinte. <br />
                <br />
                Ici myVar prend la valeur qui lui est défini selon
                l'enchainement des fonctions (scope chain). <br />
                Tout d'abord égal à 1, on rentre dans la fonction a() myVar
                devient égal à 2, ensuite dans b() aucune valeur ne lui est
                assigner donc myVar est undefined pour ensuite redevenir égal à
                1 dans le scope principal.
            </p>
            <img src={javascriptData.scope} alt="scope" />
            <p>
                Dans la fonction b() myVar n'est pas redéfini, donc pour
                afficher la valeur de myVar on regarde où b() est défini. Elle
                est dans le contexte d'execution global au meme niveau que la
                première déclaration de myVar donc égal à 1.
            </p>
            <img src={javascriptData.scope2} alt="scope" />
            <p>
                Mais si b() apparait maintenant dans la fonction a(), myVar sera
                égal à 2 car le contexte (scope) auxquel le fonction b() peut
                accéder se trouve dans la fonction a().
            </p>
            <img src={javascriptData.scope3} alt="scope" />
            <hr />
        </div>
    );
}
