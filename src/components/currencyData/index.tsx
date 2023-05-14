import { PrimogemInput } from "./PrimogemInput";
import { FatesInput } from "./FatesInput";
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
            <FatesInput icon={gameInfo.icons.fateIcon} selector={gameInfo.fatesSelector} setter={gameInfo.fatesSetter} />
            <FatesInput icon={gameInfo.icons.pinkFateIcon} selector={gameInfo.pinkFatesSelector} setter={gameInfo.pinkFatesSetter} />
        </ColumnFlex>
    );

}

export default CurrencyDataInputPanel;