import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
    primogems: 0,
    fates: 0,
    previousPulls: 0
};

const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        setPrimoGems: (state, action: PayloadAction<number>) => {
            state.primogems = action.payload > 0 ? action.payload : 0;
        },
        setFates: (state, action: PayloadAction<number>) => {
            state.fates = action.payload > 0 ? action.payload : 0;
        },
        setPreviousPulls: (state, action: PayloadAction<number>) => {
            state.previousPulls = action.payload > 0 ? action.payload : 0;
        }
    }
});

export const { setPrimoGems, setFates, setPreviousPulls } = bannerSlice.actions;
export default bannerSlice.reducer;

// Selectors
export const selectPrimogems = (state: RootState) => state.bannerData.primogems;
export const selectFates = (state: RootState) => state.bannerData.fates;
export const selectPreviousPulls = (state: RootState) => state.bannerData.previousPulls;
