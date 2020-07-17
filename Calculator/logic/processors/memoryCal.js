//функция для обработки кнопок M+, M-, Mr, Mc.
export default function(state, key) {
    const entryKey = state.nextEntry !== null ? "nextEntry" : "currentEntry";
    let preMem = state.memory || 0;
    let next = state[entryKey];
    switch (key.value) {
        case "clear":
            return {
                ...state,
                memory: null,
                [entryKey]: 0
            };

        case "recall":
            if (state.memory === null) {
                return state;
            }
            return {
                ...state,
                [entryKey]: state.memory,
            };

        case "plus":
            return {
                ...state,
                memory: Number(preMem) + Number(next),
                [entryKey]: 0
            };
        
        case "minus":
            return {
                ...state,
                memory: Number(preMem) - Number(next),
                [entryKey]: 0
            };

        default:
            return state;
    }
}