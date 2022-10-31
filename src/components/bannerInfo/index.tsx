import { BannerType } from '../BannerEnums';
import { BannerInfo } from './BannerInfo';
import styled from 'styled-components';
import { 
    selectIntertwinedFates,
    selectAcquaintFates,
    selectCharacterBannerPulls,
    selectWeaponBannerPulls,
    selectStandardBannerPulls,      // TODO: Rename pulls to pity
    setIntertwinedFates,
    setAcquaintFates,
    setCharacterBannerPulls,
    setWeaponBannerPulls,
    setStandardBannerPulls
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
                pitySelector={selectStandardBannerPulls}
                pitySetter={setStandardBannerPulls}
                fatesSelector={selectAcquaintFates}
                fatesSetter={setAcquaintFates}
            ></BannerInfo>
            <BannerInfo 
                type={BannerType.CHARACTER} 
                pitySelector={selectCharacterBannerPulls} 
                pitySetter={setCharacterBannerPulls}
                fatesSelector={selectIntertwinedFates}
                fatesSetter={setIntertwinedFates}
            ></BannerInfo>
            <BannerInfo 
                type={BannerType.WEAPON}
                pitySelector={selectWeaponBannerPulls}
                pitySetter={setWeaponBannerPulls}
                fatesSelector={selectIntertwinedFates}
                fatesSetter={setIntertwinedFates}
            ></BannerInfo>
        </FlexColumn>
    )
}

export default BannerInfoPanel;