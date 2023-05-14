import { createAction } from "@reduxjs/toolkit";
import { BannerType } from "../../enums/BannerEnums";

const characterBannerTenPullWithFatesAndPrimosAction = createAction<{pity: number, fates: number, primos: number}>('CHARACTER_TEN_PULL_WITH_FATES_AND_PRIMOS');
const characterBannerTenPullWithFatesAction = createAction<{pity: number, fates: number}>('CHARACTER_TEN_PULL_WITH_FATES');
const characterBannerTenPullWithPrimosAction = createAction<{pity: number, primos: number}>('CHARACTER_TEN_PULL_WITH_PRIMOS');
const characterBannerPullWithFatesAction = createAction<{pity: number, fates: number}>('CHARACTER_PULL_WITH_FATES');
const characterBannerPullWithPrimosAction = createAction<{pity: number, primos: number}>('CHARACTER_PULL_WITH_PRIMOS');

const weaponBannerTenPullWithFatesAndPrimosAction = createAction<{pity: number, fates: number, primos: number}>('WEAPON_TEN_PULL_WITH_FATES_AND_PRIMOS');
const weaponBannerTenPullWithFatesAction = createAction<{pity: number, fates: number}>('WEAPON_TEN_PULL_WITH_FATES');
const weaponBannerTenPullWithPrimosAction = createAction<{pity: number, primos: number}>('WEAPON_TEN_PULL_WITH_PRIMOS');
const weaponBannerPullWithFatesAction = createAction<{pity: number, fates: number}>('WEAPON_PULL_WITH_FATES');
const weaponBannerPullWithPrimosAction = createAction<{pity: number, primos: number}>('WEAPON_PULL_WITH_PRIMOS');

const standardBannerTenPullWithFatesAndPrimosAction = createAction<{pity: number, fates: number, primos: number}>('STANDARD_TEN_PULL_WITH_FATES_AND_PRIMOS');
const standardBannerTenPullWithFatesAction = createAction<{pity: number, fates: number}>('STANDARD_TEN_PULL_WITH_FATES');
const standardBannerTenPullWithPrimosAction = createAction<{pity: number, primos: number}>('STANDARD_TEN_PULL_WITH_PRIMOS');
const standardBannerPullWithFatesAction = createAction<{pity: number, fates: number}>('STANDARD_PULL_WITH_FATES');
const standardBannerPullWithPrimosAction = createAction<{pity: number, primos: number}>('STANDARD_PULL_WITH_PRIMOS');

const bannerPull = createAction<{bannerType: BannerType, pity: number, fates: number, primos: number}>('BANNER_PULL');

export {
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
    standardBannerPullWithPrimosAction,
    bannerPull,
};