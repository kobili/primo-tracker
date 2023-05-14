import { useState } from 'react';
import styled from 'styled-components';
import primogemIcon from '../../icons/primogem.png';
import { InputContainer, InputField, Image, Input, Button } from '../SharedComponents';

import { useSelector, useDispatch } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

const ButtonGroup = styled.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;`;

interface Props {
    setPrimos: ActionCreatorWithPayload<number, string>;
    selectPrimos: (state: RootState) => number;
    // TODO: Move primogem icon to a prop
}

export const PrimogemInput = ({ setPrimos, selectPrimos }: Props) => {

    const dispatch = useDispatch();

    const [shouldShowOptions, setShouldShowOptions] = useState(false);

    const primos = useSelector(selectPrimos);

    return (
        <InputContainer>
            <InputField>
                <Image src={primogemIcon} />
                <Input type="number" min={0} onChange={(e) => dispatch(setPrimos(parseInt(e.target.value)))} value={primos !== 0 ? primos : ""} />
            </InputField>
            <ButtonGroup>
                <Button onClick={() => dispatch(setPrimos(primos + 60))}>+60</Button>
                <Button onClick={() => dispatch(setPrimos(primos + 90))}>+90</Button>
                <Button style={{ marginRight: '10px' }} onClick={() => setShouldShowOptions(!shouldShowOptions)}>{shouldShowOptions ? '<' : '>'}</Button>
            </ButtonGroup>

            {shouldShowOptions && <ButtonGroup>
                <Button onClick={() => dispatch(setPrimos(primos + 1))}>+1</Button>
                <Button onClick={() => dispatch(setPrimos(primos + 2))}>+2</Button>
                <Button onClick={() => dispatch(setPrimos(primos + 5))}>+5</Button>
                <Button onClick={() => dispatch(setPrimos(primos + 10))}>+10</Button>
                <Button onClick={() => dispatch(setPrimos(primos + 20))}>+20</Button>
            </ButtonGroup>}
        </InputContainer>
    );
}