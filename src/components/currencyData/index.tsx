import { PrimogemInput } from "./PrimogemInput";
import { FatesInput } from "./FatesInput";
import blueFate from '../../icons/blue_fate.png';
import pinkFate from '../../icons/pink_fate.png';
import styled from "styled-components";
import { BannerCurrency } from "../bannerData/BannerEnums";

const ColumnFlex = styled.div`
    display: flex;
    flex-direction: column;`

const CurrencyDataInputPanel = () => {
    return (
        <ColumnFlex>
            <PrimogemInput></PrimogemInput>
            <FatesInput icon={blueFate} type={BannerCurrency.ACQUAINT}></FatesInput>
            <FatesInput icon={pinkFate} type={BannerCurrency.INTERTWINED}></FatesInput>
        </ColumnFlex>
    );

}

export default CurrencyDataInputPanel;