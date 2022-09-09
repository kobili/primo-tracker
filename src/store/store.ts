import { configureStore } from '@reduxjs/toolkit';
import bannerDataReducer from './slices/bannerDataSlice';
import { persistToLocalStorage, loadFromLocalStorage } from '../localStorage';

const existingState = loadFromLocalStorage();

export const store = configureStore({
    reducer: {
        bannerData: bannerDataReducer
    },
    preloadedState: existingState
});

store.subscribe(() => persistToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;