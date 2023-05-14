import { PrimogemInput } from "./PrimogemInput";
import { FatesInput } from "./FatesInput";
import blueFate from '../../icons/blue_fate.png';
import pinkFate from '../../icons/pink_fate.png';
import styled from "styled-components";
import { BannerCurrency } from "../../enums/BannerEnums";

import {
    selectAcquaintFates,
    selectIntertwinedFates,
    setIntertwinedFates,
    setAcquaintFates,
} from '../../store/slices/genshinBannerDataSlice';
import { Games } from "../../enums/Games";

const ColumnFlex = styled.div`
    display: flex;
    flex-direction: column;`

interface Props {
    game: Games;
}

const CurrencyDataInputPanel = ({ game }: Props) => {
    return (
        <ColumnFlex>
            <PrimogemInput></PrimogemInput>
            <FatesInput icon={blueFate} selector={selectAcquaintFates} setter={setAcquaintFates}></FatesInput>
            <FatesInput icon={pinkFate} selector={selectIntertwinedFates} setter={setIntertwinedFates}></FatesInput>
        </ColumnFlex>
    );

}

export default CurrencyDataInputPanel;