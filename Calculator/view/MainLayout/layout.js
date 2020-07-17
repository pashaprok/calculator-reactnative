import { keyTypes } from "../../logic/constants";
const { MAIN, BASIC, MEMORY, MATH } = keyTypes;

//иерархия кнопок калькулятора, что будет віводиться соответственно требованиям
export default [
    [
        `${MAIN}.clear`, 
        `${MATH}.change_sign`, 
        `${BASIC}.percentage`, 
        `${BASIC}.divide`
    ],
    [
        `${MEMORY}.clear`,
        `${MEMORY}.recall`,
        `${MEMORY}.minus`,
        `${MEMORY}.plus`
    ],
    [7, 8, 9, `${BASIC}.multiply`],
    [4, 5, 6, `${BASIC}.minus`],
    [1, 2, 3, `${BASIC}.plus`],
    [0, `${MATH}.float`, `${BASIC}.perform`, ""]
];
