import { BannerType } from '../BannerEnums';
import { BannerInfo } from './BannerInfo';
import styled from 'styled-components';
import { 
    selectIntertwinedFates,
    selectAcquaintFates,
    selectCharacterBannerPity,
    selectWeaponBannerPity,
    selectStandardBannerPity,      // TODO: Rename pulls to pity
    setIntertwinedFates,
    setAcquaintFates,
    setCharacterBannerPity,
    setWeaponBannerPity,
    setStandardBannerPity
  } from '../../store/slices/bannerDataSlice';

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
                fatesSetter={setAcquaintFates}
            ></BannerInfo>
            <BannerInfo 
                type={BannerType.CHARACTER} 
                pitySelector={selectCharacterBannerPity} 
                pitySetter={setCharacterBannerPity}
                fatesSelector={selectIntertwinedFates}
                fatesSetter={setIntertwinedFates}
            ></BannerInfo>
            <BannerInfo 
                type={BannerType.WEAPON}
                pitySelector={selectWeaponBannerPity}
                pitySetter={setWeaponBannerPity}
                fatesSelector={selectIntertwinedFates}
                fatesSetter={setIntertwinedFates}
            ></BannerInfo>
        </FlexColumn>
    )
}

export default BannerInfoPanel;