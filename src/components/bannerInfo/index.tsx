import { BannerType } from '../bannerData/BannerEnums';
import { BannerInfo } from './BannerInfo';
import styled from 'styled-components';

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;`

const BannerInfoPanel = () => {
    return (
        <FlexColumn>
            <BannerInfo type={BannerType.STANDARD}></BannerInfo>
            <BannerInfo type={BannerType.CHARACTER}></BannerInfo>
            <BannerInfo type={BannerType.WEAPON}></BannerInfo>
        </FlexColumn>
    )
}

export default BannerInfoPanel;