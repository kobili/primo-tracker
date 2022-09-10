import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
    primogems: 0,
    intertwinedFates: 0,
    acquaintFates: 0,
    characterBannerPulls: 0,
    weaponBannerPulls: 0,
    standardBannerPulls: 0
};

const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        setPrimogems: (state, action: PayloadAction<number>) => {
            state.primogems = action.payload > 0 ? action.payload : 0;
        },
        setIntertwinedFates: (state, action: PayloadAction<number>) => {
            state.intertwinedFates = action.payload > 0 ? action.payload : 0;
        },
        setAcquaintFates: (state, action: PayloadAction<number>) => {
            state.acquaintFates = action.payload > 0 ? action.payload : 0;
        },
        setCharacterBannerPulls: (state, action: PayloadAction<number>) => {
            state.characterBannerPulls = action.payload > 0 ? action.payload : 0;
        },
        setWeaponBannerPulls: (state, action: PayloadAction<number>) => {
            state.characterBannerPulls = action.payload > 0 ? action.payload : 0;
        },
        setStandardBannerPulls: (state, action: PayloadAction<number>) => {
            state.characterBannerPulls = action.payload > 0 ? action.payload : 0;
        }
    }
});

export const { 
    setPrimogems,
    setIntertwinedFates,
    setAcquaintFates,
    setCharacterBannerPulls,
    setWeaponBannerPulls,
    setStandardBannerPulls
} = bannerSlice.actions;

export default bannerSlice.reducer;

// Selectors
export const selectPrimogems = (state: RootState) => state.bannerData.primogems;
export const selectIntertwinedFates = (state: RootState) => state.bannerData.intertwinedFates;
export const selectAcquaintFates = (state: RootState) => state.bannerData.acquaintFates;
export const selectCharacterBannerPulls = (state: RootState) => state.bannerData.characterBannerPulls;
export const selectWeaponBannerPulls = (state: RootState) => state.bannerData.weaponBannerPulls;
export const selectStandardBannerPulls = (state: RootState) => state.bannerData.standardBannerPulls;
