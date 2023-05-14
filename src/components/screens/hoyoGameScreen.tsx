import styled from 'styled-components';
import CurrencyDataInputPanel from '../currencyData';
import BannerInfoPanel from '../bannerInfo';
import Eulamber from '../../images/Eulamber.jpeg';
import { GameTypes } from '../../enums/Games';

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
    game: GameTypes;
}

export const Screen = ({ game }: ScreenProps) => {
    return (
        <RowFlex>
            <BannerInfoPanel game={game}></BannerInfoPanel>
            <CurrencyDataInputPanel game={game}></CurrencyDataInputPanel>
        </RowFlex>
    );
}
