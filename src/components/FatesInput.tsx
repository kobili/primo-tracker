import styled from 'styled-components';
import pinkFate from '../icons/pink_fate.png';

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
    align-items: center;`;

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

export interface FatesInputProps {
    icon: string;
}

export const FatesInput = (props: FatesInputProps) => {
    const { icon } = props;
    return (
        <InputContainer>
            <InputField>
                <Image src={icon} />
                <Input type="number" min={0} />
            </InputField>
            <Button>+1</Button>
        </InputContainer>
    );
}