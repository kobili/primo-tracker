import { InputContainer, InputField, Image, Input, Button } from '../SharedComponents';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectAcquaintFates,
    selectIntertwinedFates,
    setIntertwinedFates,
    setAcquaintFates,
} from '../../store/slices/bannerDataSlice';
import { BannerCurrency } from '../bannerData/BannerEnums';

export interface FatesInputProps {
    icon: string;
    type: BannerCurrency;
}

export const FatesInput = (props: FatesInputProps) => {
    const { icon, type } = props;

    const dispatch = useDispatch();
    const intertwinedFates = useSelector(selectIntertwinedFates);
    const acquaintFates = useSelector(selectAcquaintFates);

    const fates = type === BannerCurrency.ACQUAINT ? acquaintFates : intertwinedFates;
    const fatesSetter = type === BannerCurrency.ACQUAINT ? setAcquaintFates : setIntertwinedFates;

    return (
        <InputContainer>
            <InputField>
                <Image src={icon} />
                <Input
                    type="number"
                    min={0}
                    onChange={(e) => dispatch(fatesSetter(parseInt(e.target.value)))}
                    value={fates !== 0 ? fates : ""} />
            </InputField>
            <Button onClick={() => dispatch(fatesSetter(fates + 1))}>+1</Button>
        </InputContainer>
    );
}