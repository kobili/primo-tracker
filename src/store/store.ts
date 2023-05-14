import { configureStore } from '@reduxjs/toolkit';
import bannerDataReducer from './slices/bannerDataSlice';
import { persistToLocalStorage, loadFromLocalStorage } from '../localStorage';
import throttle from 'lodash/throttle';

const existingState = loadFromLocalStorage();

export const store = configureStore({
    reducer: {
        genshin: bannerDataReducer
    },
    preloadedState: existingState
});

store.subscribe(throttle(() => persistToLocalStorage(store.getState()), 1000));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
