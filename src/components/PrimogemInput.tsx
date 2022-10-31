import styled from 'styled-components';
import primogemIcon from '../icons/primogem.png';
import { InputContainer, InputField, Image, Input, Button } from './StyledComponents';

const ButtonGroup = styled.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: center;`;

const ColumnFlex = styled.div`
    display: flex;
    flex-direction: column;`;

export const PrimogemInput = () => {
    return (
        <InputContainer>
            <ColumnFlex>
                <InputField>
                    <Image src={primogemIcon} />
                    <Input type="number" min={0} />
                    <ButtonGroup>
                        <Button>+60</Button>
                        <Button>+90</Button>
                    </ButtonGroup>
                </InputField>
                <ButtonGroup>
                    <Button>+1</Button>
                    <Button>+2</Button>
                    <Button>+5</Button>
                    <Button>+10</Button>
                    <Button>+20</Button>
                </ButtonGroup>
            </ColumnFlex>
        </InputContainer>
    );
}