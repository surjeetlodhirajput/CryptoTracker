// src/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cryptoReducer from './features/cryptoSlice';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};

const preloadedState = loadState();
const rootReducer = combineReducers({crypto: cryptoReducer});
const store = configureStore({
    reducer: rootReducer,
    preloadedState
});

store.subscribe(() => {
    saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
