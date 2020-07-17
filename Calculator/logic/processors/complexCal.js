//операции изменение знака и ввод плавающей точки
export default function(state, key) {
    const entryKey = state.nextEntry !== null ? "nextEntry" : "currentEntry";
    switch (key.value) {    
        case "change_sign":
            return {
            ...state,
            [entryKey]: state[entryKey] * -1
            };
    
        case "float":
            if (String(state[entryKey]).indexOf('.') > -1) {
            return state;
            }
    
            return {
            ...state,
            [entryKey]: `${state[entryKey]}.`,
            float: true
            };
    
        default:
            return state;
    }
}  