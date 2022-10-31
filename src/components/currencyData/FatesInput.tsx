import { InputContainer, InputField, Image, Input, Button } from '../SharedComponents';
import { useSelector, useDispatch } from 'react-redux';
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

import { BannerCurrency } from '../bannerData/BannerEnums';

export interface FatesInputProps {
    icon: string;
    selector: (state: RootState) => number,
    setter: ActionCreatorWithPayload<number, string>,
}

export const FatesInput = (props: FatesInputProps) => {
    const { icon, selector, setter } = props;

    const dispatch = useDispatch();
    const fates =  useSelector(selector);

    return (
        <InputContainer>
            <InputField>
                <Image src={icon} />
                <Input
                    type="number"
                    min={0}
                    onChange={(e) => dispatch(setter(parseInt(e.target.value)))}
                    value={fates !== 0 ? fates : ""} />
            </InputField>
            <Button onClick={() => dispatch(setter(fates + 1))}>+1</Button>
        </InputContainer>
    );
}