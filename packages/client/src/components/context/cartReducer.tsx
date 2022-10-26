export interface CountState {
    counter: number;
}

export type Action =
    | { type: 'ADD_PRODUCT'; payload: 1 }
    | { type: 'DELETE_PRODUCT', payload: -1 };

export const initialState: CountState = {
    counter: 0,
};

export function cartReducer(state: CountState, action: Action): CountState {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return { ...state, counter: action.payload };
        case 'DELETE_PRODUCT':
            return { ...state, counter: action.payload };
        default:
            return state;
    }
}
