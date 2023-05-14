import { createAction } from "@reduxjs/toolkit";
import { BannerType } from "../../enums/BannerEnums";

const bannerPull = createAction<{bannerType: BannerType, pity: number, fates: number, primos: number}>('BANNER_PULL');

export {
    bannerPull,
};
