import { BannerInfo } from './BannerInfo';
import styled from 'styled-components';
import { bannerPull } from '../../store/actions/PullActions';
import { GameInfo } from '../../GameInfo';

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;`

interface BannerInfoPanelProps {
    gameInfo: GameInfo;
}

const BannerInfoPanel = ({ gameInfo }: BannerInfoPanelProps) => {
    return (
        <FlexColumn>
            {gameInfo.banners.map(banner => {
                return (
                    <BannerInfo
                        key={`${gameInfo.gameType}__${banner.bannerType}`}
                        bannerType={banner.bannerType}
                        primoSelector={gameInfo.primoSelector}
                        pitySelector={banner.pitySelector}
                        pitySetter={banner.pitySetter}
                        fatesSelector={banner.fatesSelector}
                        bannerPullAction={bannerPull}
                        hardPity={banner.hardPity}
                        primosPerPull={gameInfo.primosPerPull}
                    />
                )
            })}
        </FlexColumn>
    )
}

export default BannerInfoPanel;