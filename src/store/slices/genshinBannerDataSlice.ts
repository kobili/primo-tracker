import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { bannerPull } from '../actions/PullActions';
import { BannerType } from '../../enums/BannerEnums';
import { GameTypes } from '../../enums/Games';

const initialState = {
    primogems: 0,
    intertwinedFates: 0,
    acquaintFates: 0,
    characterBannerPity: 0,
    weaponBannerPity: 0,
    standardBannerPity: 0
};


const bannerSlice = createSlice({
    name: 'genshin',
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
        setCharacterBannerPity: (state, action: PayloadAction<number>) => {
            state.characterBannerPity = action.payload > 0 ? action.payload : 0;
        },
        setWeaponBannerPity: (state, action: PayloadAction<number>) => {
            state.weaponBannerPity = action.payload > 0 ? action.payload : 0;
        },
        setStandardBannerPity: (state, action: PayloadAction<number>) => {
            state.standardBannerPity = action.payload > 0 ? action.payload : 0;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(bannerPull(GameTypes.GENSHIN), (state, action) => {
                const { bannerType, pity, fates, primos } = action.payload;
                switch (bannerType) {
                    case BannerType.STANDARD:
                        state.standardBannerPity = pity;
                        state.acquaintFates = fates;
                        break;
                    case BannerType.CHARACTER:
                        state.characterBannerPity = pity;
                        state.intertwinedFates = fates;
                        break;
                    case BannerType.WEAPON:
                        state.weaponBannerPity = pity;
                        state.intertwinedFates = fates;
                        break;
                }
                state.primogems = primos;
            })
    },
});

export const {
    setPrimogems,
    setIntertwinedFates,
    setAcquaintFates,
    setCharacterBannerPity,
    setWeaponBannerPity,
    setStandardBannerPity
} = bannerSlice.actions;

export default bannerSlice.reducer;

// Selectors
export const selectPrimogems = (state: RootState) => state.genshin.primogems;
export const selectIntertwinedFates = (state: RootState) => state.genshin.intertwinedFates;
export const selectAcquaintFates = (state: RootState) => state.genshin.acquaintFates;
export const selectCharacterBannerPity = (state: RootState) => state.genshin.characterBannerPity;
export const selectWeaponBannerPity = (state: RootState) => state.genshin.weaponBannerPity;
export const selectStandardBannerPity = (state: RootState) => state.genshin.standardBannerPity;
