import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { bannerPull } from '../actions/PullActions';
import { BannerType } from '../../enums/BannerEnums';
import { GameTypes } from '../../enums/Games';

const initialState = {
    jades: 0,
    specialRailPasses: 0,
    railPasses: 0,
    characterBannerPity: 0,
    weaponBannerPity: 0,
    standardBannerPity: 0
};


const bannerSlice = createSlice({
    name: 'starRail',
    initialState,
    reducers: {
        setJades: (state, action: PayloadAction<number>) => {
            state.jades = action.payload > 0 ? action.payload : 0;
        },
        setSpecialRailPasses: (state, action: PayloadAction<number>) => {
            state.specialRailPasses = action.payload > 0 ? action.payload : 0;
        },
        setRailPasses: (state, action: PayloadAction<number>) => {
            state.railPasses = action.payload > 0 ? action.payload : 0;
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
            .addCase(bannerPull(GameTypes.HONKAI_STAR_RAIL), (state, action) => {
                const { bannerType, pity, fates, primos } = action.payload;
                switch (bannerType) {
                    case BannerType.STANDARD:
                        state.standardBannerPity = pity;
                        state.railPasses = fates;
                        break;
                    case BannerType.CHARACTER:
                        state.characterBannerPity = pity;
                        state.specialRailPasses = fates;
                        break;
                    case BannerType.WEAPON:
                        state.weaponBannerPity = pity;
                        state.specialRailPasses = fates;
                        break;
                }
                state.jades = primos;
            })
    },
});

export const {
    setJades,
    setSpecialRailPasses,
    setRailPasses,
    setCharacterBannerPity,
    setWeaponBannerPity,
    setStandardBannerPity
} = bannerSlice.actions;

export default bannerSlice.reducer;

// Selectors
export const selectJades = (state: RootState) => state.starRail.jades;
export const selectSpecialRailPasses = (state: RootState) => state.starRail.specialRailPasses;
export const selectRailPasses = (state: RootState) => state.starRail.railPasses;
export const selectCharacterBannerPity = (state: RootState) => state.starRail.characterBannerPity;
export const selectWeaponBannerPity = (state: RootState) => state.starRail.weaponBannerPity;
export const selectStandardBannerPity = (state: RootState) => state.starRail.standardBannerPity;
