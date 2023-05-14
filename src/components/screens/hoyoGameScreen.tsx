import styled from 'styled-components';
import CurrencyDataInputPanel from '../currencyData';
import BannerInfoPanel from '../bannerInfo';
import Eulamber from '../../images/Eulamber.jpeg';

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

export const Screen = () => {
    return (
        <RowFlex>
            <BannerInfoPanel></BannerInfoPanel>
            <CurrencyDataInputPanel></CurrencyDataInputPanel>
        </RowFlex>
    );
}
