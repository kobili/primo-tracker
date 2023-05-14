import { PrimogemInput } from "./PrimogemInput";
import { FatesInput } from "./FatesInput";
import blueFate from '../../icons/blue_fate.png';
import pinkFate from '../../icons/pink_fate.png';
import styled from "styled-components";
import { GameInfo } from "../../GameInfo";

const ColumnFlex = styled.div`
    display: flex;
    flex-direction: column;`

interface Props {
    gameInfo: GameInfo;
}

const CurrencyDataInputPanel = ({ gameInfo }: Props) => {
    return (
        <ColumnFlex>
            <PrimogemInput setPrimos={gameInfo.primoSetter} selectPrimos={gameInfo.primoSelector} />
            <FatesInput icon={blueFate} selector={gameInfo.fatesSelector} setter={gameInfo.fatesSetter} />
            <FatesInput icon={pinkFate} selector={gameInfo.pinkFatesSelector} setter={gameInfo.pinkFatesSetter} />
        </ColumnFlex>
    );

}

export default CurrencyDataInputPanel;