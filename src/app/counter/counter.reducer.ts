import { createReducer, on } from '@ngrx/store';
import * as action from './counter.actions';

export const initialState = 10;

export const counterReducer = createReducer(
    initialState,
    on(action.increment, (state) => state + 1),
    on(action.decrement, (state) => state - 1),
    on(action.multiply, (state, { value }) => state * value),
    on(action.divide, (state, { value }) => state / value),
    on(action.reset, (state) => initialState)
);