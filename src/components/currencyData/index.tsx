import { PrimogemInput } from "./PrimogemInput";
import { FatesInput } from "./FatesInput";
import blueFate from '../../icons/blue_fate.png';
import pinkFate from '../../icons/pink_fate.png';
import styled from "styled-components";
import { BannerCurrency } from "../bannerData/BannerEnums";

import {
    selectAcquaintFates,
    selectIntertwinedFates,
    setIntertwinedFates,
    setAcquaintFates,
} from '../../store/slices/bannerDataSlice';

const ColumnFlex = styled.div`
    display: flex;
    flex-direction: column;`

const CurrencyDataInputPanel = () => {
    return (
        <ColumnFlex>
            <PrimogemInput></PrimogemInput>
            <FatesInput icon={blueFate} selector={selectAcquaintFates} setter={setAcquaintFates}></FatesInput>
            <FatesInput icon={pinkFate} selector={selectIntertwinedFates} setter={setIntertwinedFates}></FatesInput>
        </ColumnFlex>
    );

}

export default CurrencyDataInputPanel;