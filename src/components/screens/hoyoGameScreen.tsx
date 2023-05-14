import styled from 'styled-components';
import CurrencyDataInputPanel from '../currencyData';
import BannerInfoPanel from '../bannerInfo';
import Eulamber from '../../images/Eulamber.jpeg';
import { GameTypes } from '../../enums/Games';
import { GameInfo } from '../../GameInfo';

const RowFlex = styled.div`
    padding: 50px;
    display: flex;
    gap: 10%;
    align-items: flex-start;
    margin-bottom: 10px;
    flex-wrap: wrap;
    background-image: url(${Eulamber});
    background-size: auto 65vh;
    background-repeat: no-repeat;
    background-position: bottom right`;

interface ScreenProps {
    gameInfo: GameInfo;
}

export const Screen = ({ gameInfo }: ScreenProps) => {
    return (
        <RowFlex>
            <BannerInfoPanel gameInfo={gameInfo}></BannerInfoPanel>
            <CurrencyDataInputPanel gameInfo={gameInfo}></CurrencyDataInputPanel>
        </RowFlex>
    );
}
