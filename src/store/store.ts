import { configureStore } from '@reduxjs/toolkit';
import bannerDataReducer from './slices/bannerDataSlice';

export const store = configureStore({
    reducer: {
        bannerData: bannerDataReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;