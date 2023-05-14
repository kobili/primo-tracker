import styled from 'styled-components';
import CurrencyDataInputPanel from '../currencyData';
import BannerInfoPanel from '../bannerInfo';
import { GameInfo } from '../../GameInfo';

interface ScreenProps {
    gameInfo: GameInfo;
}

export const Screen = ({ gameInfo }: ScreenProps) => {
    const RowFlex = styled.div`
    padding: 50px;
    display: flex;
    gap: 10%;
    align-items: flex-start;
    margin-bottom: 10px;
    flex-wrap: wrap;
    background-image: url(${gameInfo.icons.backgroundImage});
    background-size: auto 65vh;
    background-repeat: no-repeat;
    background-position: bottom right`;

    return (
        <RowFlex>
            <BannerInfoPanel gameInfo={gameInfo}></BannerInfoPanel>
            <CurrencyDataInputPanel gameInfo={gameInfo}></CurrencyDataInputPanel>
        </RowFlex>
    );
}
