import styled from 'styled-components';
import primogemIcon from '../icons/primogem.png';

const INPUT_AND_BUTTON_HEIGHT = "36px";

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin-bottom: 20px`;

const InputField = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    gap: 10px;`;

const Image = styled.img`
    height: 38px;
    width: auto;
    margin-right: -50;`;

const Input = styled.input`
    max-width: 500px;
    padding: 7px;
    height: ${INPUT_AND_BUTTON_HEIGHT};
    font-size: 1rem;
    font-weight: 500;
    
    flex: 1;

    border: 1px solid #ced4da;
    border-radius: 0.375rem;`;

const Button = styled.button`
    padding: 6px;
    border: 2px #0d6efd solid;
    color: #0d6efd;
    background-color: white;
    border-radius: 5px;
    height: ${INPUT_AND_BUTTON_HEIGHT};
    &:hover {
        color: white;
        background-color: #0d6efd;
        cursor: pointer;
    }
    display: flex;
    justify-content: center;
    align-items: center;`;

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