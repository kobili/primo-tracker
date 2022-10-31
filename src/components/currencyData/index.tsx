import { PrimogemInput } from "./PrimogemInput";
import { FatesInput } from "./FatesInput";
import blueFate from '../../icons/blue_fate.png';
import pinkFate from '../../icons/pink_fate.png';

const CurrencyDataInputPanel = () => {
    return (
        <>
            <PrimogemInput></PrimogemInput>
            <FatesInput icon={blueFate}></FatesInput>
            <FatesInput icon={pinkFate}></FatesInput>
        </>
    );

}

export default CurrencyDataInputPanel;