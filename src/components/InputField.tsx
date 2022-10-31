import styled from 'styled-components';
import primogemIcon from '../icons/primogem.png';

const Button = styled.button`
    padding: 6px;
    border: 2px #0d6efd solid;
    color: #0d6efd;
    background-color: white;
    border-radius: 5px;
    &:hover {
        color: white;
        background-color: #0d6efd;
        cursor: pointer;
    }`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: center;`;

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;`;

const Input = styled.input`
    max-width: 500px;
    padding: 7px;
    height: 36px;
    font-size: 1rem;
    font-weight: 500;
    
    flex: 1;

    border: 1px solid #ced4da;
    border-radius: 0.375rem;`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;`;

const Image = styled.img`
    height: 38px;
    width: auto;
    margin-right: -50;`;

export const InputField = () => {
    return (
        <InputGroup>
            <InputContainer>
                <Image src={primogemIcon} />
                <Input type="number" />
            </InputContainer>
            <ButtonGroup>
                <Button>+1</Button>
                <Button>+2</Button>
                <Button>+5</Button>
                <Button>+10</Button>
                <Button>+20</Button>
                <Button>+60</Button>
                <Button>+90</Button>
            </ButtonGroup>
        </InputGroup>
    );
}