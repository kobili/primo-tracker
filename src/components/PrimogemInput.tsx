import { useState } from 'react';
import styled from 'styled-components';
import primogemIcon from '../icons/primogem.png';
import { InputContainer, InputField, Image, Input, Button } from './StyledComponents';

const ButtonGroup = styled.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;`;

export const PrimogemInput = () => {

    const [shouldShowOptions, setShouldShowOptions] = useState(false);

    return (
        <InputContainer>
            <InputField>
                <Image src={primogemIcon} />
                <Input type="number" />
            </InputField>
            <ButtonGroup>
                <Button>+60</Button>
                <Button>+90</Button>
                {/* <Button style={{marginRight: '20px'}} onClick={() => setShouldShowOptions(!shouldShowOptions)}>{'>'}</Button> */}
            </ButtonGroup>
            {/* <ButtonGroup>
                <Button>+1</Button>
                <Button>+2</Button>
                <Button>+5</Button>
                <Button>+10</Button>
                <Button>+20</Button>
            </ButtonGroup> */}

        </InputContainer>
    );
}