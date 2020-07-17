//функция сброса расчета
export default function(state, key) {
    switch (key.value) {
        case 'clear':
            return {
            ...state,
            open: key.value === "clear" ? state.open : true,
            currentEntry: 0,
            nextEntry: null,
            operation: null
            };
        default:
            return state;
    }
}