import { keyTypes } from '../../logic/constants';
const { MAIN, BASIC, MEMORY, MATH } = keyTypes;

//экспорт всех ключей операций, используемых в калькуляторе.
export default [
    {
        type: MAIN,
        value: "clear",
        label: "AC",
        extraClass: {
            theme: "secondary"
        }
    },
    {
        type: BASIC,
        value: "perform",
        label: "=",
        extraClass: {
            theme: "accent"
        }
    },
    {
        type: BASIC,
        value: "divide",
        label: "÷",
        extraClass: {
            theme: "accent"
        }
    },
    {
        type: BASIC,
        value: "percentage",
        label: "%",
        extraClass: {
            theme: "secondary"
        }
    },
    {
        type: BASIC,
        value: "multiply",
        label: "×",
        extraClass: {
            theme: "accent"
        }
    },
    {
        type: BASIC,
        value: "minus",
        label: "-",
        extraClass: {
            theme: "accent"
        }
    },
    {
        type: BASIC,
        value: "plus",
        label: "+",
        extraClass: {
            theme: "accent"
        }
    },
    {
        type: MEMORY,
        value: "clear",
        label: "MC"
    },
    {
        type: MEMORY,
        value: "recall",
        label: "MR"
    },
    {
        type: MEMORY,
        value: "minus",
        label: "M-"
    },
    {
        type: MEMORY,
        value: "plus",
        label: "M+",
        extraClass: {
            theme: "accent"
        }
    },
    {
        type: MATH,
        value: "float",
        label: "."
    },
    {
        type: MATH,
        value: "change_sign",
        label: "+/-",
        extraClass: {
            theme: "secondary"
        }
    }
];
