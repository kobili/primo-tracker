import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { GameTypes } from "./enums/Games";
import { RootState } from "./store/store";
import { BannerType } from "./enums/BannerEnums";
import {
    selectIntertwinedFates,
    selectAcquaintFates,
    selectCharacterBannerPity as selectGenshinCharacterPity,
    selectWeaponBannerPity as selectGenshinWeaponPity,
    selectStandardBannerPity as selectGenshinStandardPity,
    setCharacterBannerPity as setGenshinCharacterPity,
    setWeaponBannerPity as setGenshinWeaponPity,
    setStandardBannerPity as setGenshinStandardPity,
    selectPrimogems,
    setPrimogems,
    setAcquaintFates,
    setIntertwinedFates,
} from './store/slices/genshinBannerDataSlice';

import {
    setJades,
    selectJades,
    setRailPasses,
    selectRailPasses,
    setSpecialRailPasses,
    selectSpecialRailPasses,
    setStandardBannerPity as setStarRailStandardPity,
    selectStandardBannerPity as selectStarRailStandardPity,
    setCharacterBannerPity as setStarRailCharacterPity,
    selectCharacterBannerPity as selectStarRailCharacterPity,
    setWeaponBannerPity as setStarRailWeaponPity,
    selectWeaponBannerPity as selectStarRailWeaponPity,
} from './store/slices/starRailBannerDataSlice';

type ReduxNumberSelector = (state: RootState) => number;
type ReduxNumberSetter = ActionCreatorWithPayload<number, string>;

export interface GameInfo {
    banners: Banner[];
    gameType: GameTypes;
    primosPerPull: number;

    primoSelector: ReduxNumberSelector;
    primoSetter: ReduxNumberSetter;
    fatesSelector: ReduxNumberSelector;
    fatesSetter: ReduxNumberSetter;
    pinkFatesSelector: ReduxNumberSelector;
    pinkFatesSetter: ReduxNumberSetter;
}

interface Banner {
    bannerType: BannerType;
    hardPity: number;
    pitySelector: ReduxNumberSelector;
    pitySetter: ReduxNumberSetter;
    fatesSelector: ReduxNumberSelector;
}

export const GENSHIN_GAME_INFO: GameInfo = {
    gameType: GameTypes.GENSHIN,
    primosPerPull: 160,
    banners: [
        {
            bannerType: BannerType.STANDARD,
            hardPity: 90,
            pitySelector: selectGenshinStandardPity,
            pitySetter: setGenshinStandardPity,
            fatesSelector: selectAcquaintFates,
        },
        {
            bannerType: BannerType.CHARACTER,
            hardPity: 90,
            pitySelector: selectGenshinCharacterPity,
            pitySetter: setGenshinCharacterPity,
            fatesSelector: selectIntertwinedFates,
        },
        {
            bannerType: BannerType.WEAPON,
            hardPity: 80,
            pitySelector: selectGenshinWeaponPity,
            pitySetter: setGenshinWeaponPity,
            fatesSelector: selectIntertwinedFates,
        },
    ],
    primoSelector: selectPrimogems,
    primoSetter: setPrimogems,
    fatesSelector: selectAcquaintFates,
    fatesSetter: setAcquaintFates,
    pinkFatesSelector: selectIntertwinedFates,
    pinkFatesSetter: setIntertwinedFates,
}

export const STAR_RAIL_GAME_INFO: GameInfo = {
    gameType: GameTypes.HONKAI_STAR_RAIL,
    primosPerPull: 160,
    banners: [
        {
            bannerType: BannerType.STANDARD,
            hardPity: 90,
            pitySelector: selectStarRailStandardPity,
            pitySetter: setStarRailStandardPity,
            fatesSelector: selectRailPasses,
        },
        {
            bannerType: BannerType.CHARACTER,
            hardPity: 90,
            pitySelector: selectStarRailCharacterPity,
            pitySetter: setStarRailCharacterPity,
            fatesSelector: selectSpecialRailPasses,
        },
        {
            bannerType: BannerType.WEAPON,
            hardPity: 80,
            pitySelector: selectStarRailWeaponPity,
            pitySetter: setStarRailWeaponPity,
            fatesSelector: selectSpecialRailPasses,
        },
    ],
    primoSelector: selectJades,
    primoSetter: setJades,
    fatesSelector: selectRailPasses,
    fatesSetter: setRailPasses,
    pinkFatesSelector: selectSpecialRailPasses,
    pinkFatesSetter: setSpecialRailPasses,
}
