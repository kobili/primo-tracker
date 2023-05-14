import { BannerType } from '../../enums/BannerEnums';
import { BannerInfo } from './BannerInfo';
import styled from 'styled-components';
import {
    selectIntertwinedFates,
    selectAcquaintFates,
    selectCharacterBannerPity as selectGenshinCharacterPity,
    selectWeaponBannerPity as selectGenshinWeaponPity,
    selectStandardBannerPity as selectGenshinStandardPity,
    setCharacterBannerPity as setGenshinCharacterPity,
    setWeaponBannerPity as setGenshinWeaponPity,
    setStandardBannerPity as setGenshinStandardPity,
} from '../../store/slices/genshinBannerDataSlice';

import { bannerPull } from '../../store/actions/PullActions';
import { Games } from '../../enums/Games';

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;`

interface BannerInfoPanelProps {
    game: Games;
}

const BannerInfoPanel = ({game}: BannerInfoPanelProps) => {
    return (
        <FlexColumn>
            <BannerInfo
                bannerType={BannerType.STANDARD}
                pitySelector={selectGenshinStandardPity}
                pitySetter={setGenshinStandardPity}
                fatesSelector={selectAcquaintFates}
                bannerPullAction={bannerPull}
            ></BannerInfo>
            <BannerInfo
                bannerType={BannerType.CHARACTER}
                pitySelector={selectGenshinCharacterPity}
                pitySetter={setGenshinCharacterPity}
                fatesSelector={selectIntertwinedFates}
                bannerPullAction={bannerPull}
            ></BannerInfo>
            <BannerInfo
                bannerType={BannerType.WEAPON}
                pitySelector={selectGenshinWeaponPity}
                pitySetter={setGenshinWeaponPity}
                fatesSelector={selectIntertwinedFates}
                bannerPullAction={bannerPull}
            ></BannerInfo>
        </FlexColumn>
    )
}

export default BannerInfoPanel;