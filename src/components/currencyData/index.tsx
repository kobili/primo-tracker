import { PrimogemInput } from "./PrimogemInput";
import { FatesInput } from "./FatesInput";
import blueFate from '../../icons/blue_fate.png';
import pinkFate from '../../icons/pink_fate.png';
import styled from "styled-components";

const ColumnFlex = styled.div`
    display: flex;
    flex-direction: column;`

const CurrencyDataInputPanel = () => {
    return (
        <ColumnFlex>
            <PrimogemInput></PrimogemInput>
            <FatesInput icon={blueFate}></FatesInput>
            <FatesInput icon={pinkFate}></FatesInput>
        </ColumnFlex>
    );

}

export default CurrencyDataInputPanel;