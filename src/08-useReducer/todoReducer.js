export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] create todo':
            return [action.payload, ...initialState.filter(todo => todo.id !== action.payload)];

        case '[TODO] delete todo':
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] toggle todo':
            return initialState.map(todo => {
                if (todo.id === action.payload) return { ...todo, done: !todo.done };
                return todo;
            });

        default:
            return initialState;
    }
};