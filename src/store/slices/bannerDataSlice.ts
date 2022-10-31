import { createAction, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {
    characterBannerTenPullWithFatesAndPrimosAction,
    characterBannerTenPullWithFatesAction,
    characterBannerTenPullWithPrimosAction,
    characterBannerPullWithFatesAction,
    characterBannerPullWithPrimosAction,
    weaponBannerTenPullWithFatesAndPrimosAction,
    weaponBannerTenPullWithFatesAction,
    weaponBannerTenPullWithPrimosAction,
    weaponBannerPullWithFatesAction,
    weaponBannerPullWithPrimosAction,
    standardBannerTenPullWithFatesAndPrimosAction,
    standardBannerTenPullWithFatesAction,
    standardBannerTenPullWithPrimosAction,
    standardBannerPullWithFatesAction,
    standardBannerPullWithPrimosAction
} from '../actions/PullActions';

const initialState = {
    primogems: 0,
    intertwinedFates: 0,
    acquaintFates: 0,
    characterBannerPity: 0,
    weaponBannerPity: 0,
    standardBannerPity: 0
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
            .addCase(characterBannerTenPullWithFatesAndPrimosAction, (state, action) => {
                const {pity, fates, primos} = action.payload;
                state.characterBannerPity = pity;
                state.intertwinedFates = fates;
                state.primogems = primos;
            })
            .addCase(characterBannerTenPullWithFatesAction, (state, action) => {
                const {pity, fates} = action.payload;
                state.characterBannerPity = pity;
                state.intertwinedFates = fates;
            })
            .addCase(characterBannerTenPullWithPrimosAction, (state, action) => {
                const { pity, primos } = action.payload;
                state.characterBannerPity = pity;
                state.primogems = primos;
            })
            .addCase(characterBannerPullWithFatesAction, (state, action) => {
                const { pity, fates } = action.payload;
                state.characterBannerPity = pity;
                state.intertwinedFates = fates;
            })
            .addCase(characterBannerPullWithPrimosAction, (state, action) => {
                const { pity, primos } = action.payload;
                state.characterBannerPity = pity;
                state.primogems = primos;
            })
            .addCase(weaponBannerTenPullWithFatesAndPrimosAction, (state, action) => {
                const {pity, fates, primos} = action.payload;
                state.weaponBannerPity = pity;
                state.intertwinedFates = fates;
                state.primogems = primos;
            })
            .addCase(weaponBannerTenPullWithFatesAction, (state, action) => {
                const { pity, fates } = action.payload;
                state.weaponBannerPity = pity;
                state.intertwinedFates = fates;
            })
            .addCase(weaponBannerTenPullWithPrimosAction, (state, action) => {
                const { pity, primos } = action.payload;
                state.weaponBannerPity = pity;
                state.primogems = primos;
            })
            .addCase(weaponBannerPullWithFatesAction, (state, action) => {
                const { pity, fates } = action.payload;
                state.weaponBannerPity = pity;
                state.intertwinedFates = fates;
            })
            .addCase(weaponBannerPullWithPrimosAction, (state, action) => {
                const { pity, primos } = action.payload;
                state.weaponBannerPity = pity;
                state.primogems = primos;
            })
            .addCase(standardBannerTenPullWithFatesAndPrimosAction, (state, action) => {
                const {pity, fates, primos} = action.payload;
                state.standardBannerPity = pity;
                state.acquaintFates = fates;
                state.primogems = primos;
            })
            .addCase(standardBannerTenPullWithFatesAction, (state, action) => {
                const { pity, fates } = action.payload;
                state.standardBannerPity = pity;
                state.acquaintFates = fates;
            })
            .addCase(standardBannerTenPullWithPrimosAction, (state, action) => {
                const { pity, primos } = action.payload;
                state.standardBannerPity = pity;
                state.primogems = primos;
            })
            .addCase(standardBannerPullWithFatesAction, (state, action) => {
                const { pity, fates } = action.payload;
                state.standardBannerPity = pity;
                state.acquaintFates = fates;
            })
            .addCase(standardBannerPullWithPrimosAction, (state, action) => {
                const { pity, primos } = action.payload;
                state.standardBannerPity = pity;
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
export const selectPrimogems = (state: RootState) => state.bannerData.primogems;
export const selectIntertwinedFates = (state: RootState) => state.bannerData.intertwinedFates;
export const selectAcquaintFates = (state: RootState) => state.bannerData.acquaintFates;
export const selectCharacterBannerPity = (state: RootState) => state.bannerData.characterBannerPity;
export const selectWeaponBannerPity = (state: RootState) => state.bannerData.weaponBannerPity;
export const selectStandardBannerPity = (state: RootState) => state.bannerData.standardBannerPity;
