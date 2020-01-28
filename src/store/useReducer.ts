import { useState } from 'react'
import { ITodo } from '../interfaces';

export default function useReducer(reducer: any, initialState: []): [ITodo[], any] {
    const [state, setState] = useState(initialState);

    function dispatch(action: Object) {
        const nextState = reducer(state, action);
        
        setState(nextState);
    }

    return [state, dispatch];
}