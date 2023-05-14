import { createAction } from "@reduxjs/toolkit";
import { BannerType } from "../../enums/BannerEnums";

const bannerPull = (game: string) => createAction<{bannerType: BannerType, pity: number, fates: number, primos: number}>(`${game}/BANNER_PULL`);

export {
    bannerPull,
};
