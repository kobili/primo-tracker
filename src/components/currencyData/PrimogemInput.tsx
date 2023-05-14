import { useState } from 'react';
import styled from 'styled-components';
import primogemIcon from '../../icons/primogem.png';
import { InputContainer, InputField, Image, Input, Button } from '../SharedComponents';

import { useSelector, useDispatch } from 'react-redux';
import { selectPrimogems, setPrimogems } from '../../store/slices/genshinBannerDataSlice';

const ButtonGroup = styled.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;`;

export const PrimogemInput = () => {

    const dispatch = useDispatch();

    const [shouldShowOptions, setShouldShowOptions] = useState(false);

    const primos = useSelector(selectPrimogems);

    return (
        <InputContainer>
            <InputField>
                <Image src={primogemIcon} />
                <Input type="number" min={0} onChange={(e) => dispatch(setPrimogems(parseInt(e.target.value)))} value={primos !== 0 ? primos : ""}/>
            </InputField>
            <ButtonGroup>
                <Button onClick={() => dispatch(setPrimogems(primos + 60))}>+60</Button>
                <Button onClick={() => dispatch(setPrimogems(primos + 90))}>+90</Button>
                <Button style={{ marginRight: '10px' }} onClick={() => setShouldShowOptions(!shouldShowOptions)}>{shouldShowOptions ? '<' : '>'}</Button>
            </ButtonGroup>

            {shouldShowOptions && <ButtonGroup>
                <Button onClick={() => dispatch(setPrimogems(primos + 1))}>+1</Button>
                <Button onClick={() => dispatch(setPrimogems(primos + 2))}>+2</Button>
                <Button onClick={() => dispatch(setPrimogems(primos + 5))}>+5</Button>
                <Button onClick={() => dispatch(setPrimogems(primos + 10))}>+10</Button>
                <Button onClick={() => dispatch(setPrimogems(primos + 20))}>+20</Button>
            </ButtonGroup>}
        </InputContainer>
    );
}