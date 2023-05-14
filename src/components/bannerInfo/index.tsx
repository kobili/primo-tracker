import { BannerType } from '../../enums/BannerEnums';
import { BannerInfo } from './BannerInfo';
import styled from 'styled-components';
import {
    selectIntertwinedFates,
    selectAcquaintFates,
    selectCharacterBannerPity,
    selectWeaponBannerPity,
    selectStandardBannerPity,
    setCharacterBannerPity,
    setWeaponBannerPity,
    setStandardBannerPity,
} from '../../store/slices/bannerDataSlice';

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
} from '../../store/actions/PullActions';

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;`

const BannerInfoPanel = () => {
    return (
        <FlexColumn>
            <BannerInfo
                type={BannerType.STANDARD}
                pitySelector={selectStandardBannerPity}
                pitySetter={setStandardBannerPity}
                fatesSelector={selectAcquaintFates}
                bannerTenPullWithFatesAndPrimosAction={standardBannerTenPullWithFatesAndPrimosAction}
                bannerTenPullWithFatesAction={standardBannerTenPullWithFatesAction}
                bannerTenPullWithPrimosAction={standardBannerTenPullWithPrimosAction}
                bannerPullWithFatesAction={standardBannerPullWithFatesAction}
                bannerPullWithPrimosAction={standardBannerPullWithPrimosAction}
            ></BannerInfo>
            <BannerInfo
                type={BannerType.CHARACTER}
                pitySelector={selectCharacterBannerPity}
                pitySetter={setCharacterBannerPity}
                fatesSelector={selectIntertwinedFates}
                bannerTenPullWithFatesAndPrimosAction={characterBannerTenPullWithFatesAndPrimosAction}
                bannerTenPullWithFatesAction={characterBannerTenPullWithFatesAction}
                bannerTenPullWithPrimosAction={characterBannerTenPullWithPrimosAction}
                bannerPullWithFatesAction={characterBannerPullWithFatesAction}
                bannerPullWithPrimosAction={characterBannerPullWithPrimosAction}
            ></BannerInfo>
            <BannerInfo
                type={BannerType.WEAPON}
                pitySelector={selectWeaponBannerPity}
                pitySetter={setWeaponBannerPity}
                fatesSelector={selectIntertwinedFates}
                bannerTenPullWithFatesAndPrimosAction={weaponBannerTenPullWithFatesAndPrimosAction}
                bannerTenPullWithFatesAction={weaponBannerTenPullWithFatesAction}
                bannerTenPullWithPrimosAction={weaponBannerTenPullWithPrimosAction}
                bannerPullWithFatesAction={weaponBannerPullWithFatesAction}
                bannerPullWithPrimosAction={weaponBannerPullWithPrimosAction}
            ></BannerInfo>
        </FlexColumn>
    )
}

export default BannerInfoPanel;