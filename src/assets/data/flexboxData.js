import alignContent from '../pictures/flexbox/alignContent.png'
import alignItem from '../pictures/flexbox/alignItem.png'
import alignSelf from '../pictures/flexbox/alignSelf.png'
import direction from '../pictures/flexbox/direction.png'
import gap from '../pictures/flexbox/gap.png'
import grow from '../pictures/flexbox/grow.png'
import justify from '../pictures/flexbox/justify.png'
import wrap from '../pictures/flexbox/wrap.png'

export const flexboxData = [
    {
        property: "flex-direction",
        description: "Oriente les éléments sous forme de lignes ou de colonnes",
        values:
            [
                "row", "column", "row-reverse", "column-reverse"
            ],
        image: direction,
    },
    {
        property: "justify-content",
        description: "Définit l'espacement horizontal des éléments",
        values:
            [
                "center", "flex-start", "flex-end", "space-around", "space-between"
            ],
        image: justify,
    },
    {
        property: "align-items",
        description: "Aligne verticalement les éléments sur l'axe horizontal",
        values:
            [
                "center", "flex-start", "flex-end", "strech", "baseline"
            ],
        image: alignItem,
    },
    {
        property: "align-content",
        description: "Aligne les éléments sur plusieurs lignes",
        values:
            [
                "center", "flex-start", "flex-end", "space-around", "space-between", "strech",
            ],
        image: alignContent,
    },
    {
        property: "flex-wrap",
        description: "Renvoie les items à la ligne",
        values:
            [
                "nowrap", "wrap", "wrap-reverse",
            ],
        image: wrap,
    },
    {
        property: "flex-flow",
        description: "Mix entre les propriétés direction et wrap",
        values:
            [
                "column wrap", "row wrap", "column nowrap", "row nowrap", "...reverse",
            ],
    },
    {
        property: "flex-grow",
        description: "Agrandie un item en s'adressant directement à lui",
        values:
            [
                "flex-grow: 4;", "l'item sera ainsi 4 fois plus large que les autres dans le même conteneur",
            ],
        image: grow,
    },
    {
        property: "align-self",
        description: "Aligne un item différement des autres",
        values:
            [
                "auto", "flex-start", "flex-end", "center", "baseline", "stretch",
            ],
        image: alignSelf,
    },
    {
        property: "gap, row-gap, column-gap",
        description: "Gére l'espacement entre item et/ou rows et/ou colonnes",
        values:
            [
                "gap: 10px;",
                "gap: 10px 20px;",
                "row-gap: 10px;",
                "column-gap: 20px;",
            ],
        image: gap,
    }
]