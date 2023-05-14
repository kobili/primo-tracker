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
} from '../../store/slices/genshinBannerDataSlice';

import { bannerPull } from '../../store/actions/PullActions';

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;`

const BannerInfoPanel = () => {
    return (
        <FlexColumn>
            <BannerInfo
                bannerType={BannerType.STANDARD}
                pitySelector={selectStandardBannerPity}
                pitySetter={setStandardBannerPity}
                fatesSelector={selectAcquaintFates}
                bannerPullAction={bannerPull}
            ></BannerInfo>
            <BannerInfo
                bannerType={BannerType.CHARACTER}
                pitySelector={selectCharacterBannerPity}
                pitySetter={setCharacterBannerPity}
                fatesSelector={selectIntertwinedFates}
                bannerPullAction={bannerPull}
            ></BannerInfo>
            <BannerInfo
                bannerType={BannerType.WEAPON}
                pitySelector={selectWeaponBannerPity}
                pitySetter={setWeaponBannerPity}
                fatesSelector={selectIntertwinedFates}
                bannerPullAction={bannerPull}
            ></BannerInfo>
        </FlexColumn>
    )
}

export default BannerInfoPanel;