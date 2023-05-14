import { PrimogemInput } from "./PrimogemInput";
import { FatesInput } from "./FatesInput";
// import blueFate from '../../icons/blue_fate.png';
import blueFate from '../../../public/blue_fate.png'
import pinkFate from '../../../public/pink_fate.png'
import styled from "styled-components";
import { BannerCurrency } from "../../enums/BannerEnums";

import {
    selectAcquaintFates,
    selectIntertwinedFates,
    setIntertwinedFates,
    setAcquaintFates,
} from '../../store/slices/genshinBannerDataSlice';

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