import styled from 'styled-components';

const INPUT_AND_BUTTON_HEIGHT = "36px";

export const Button = styled.button`
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

export const Input = styled.input`
    max-width: 500px;
    padding: 7px;
    height: ${INPUT_AND_BUTTON_HEIGHT};
    font-size: 1rem;
    font-weight: 500;
    
    flex: 1;

    border: 1px solid #ced4da;
    border-radius: 0.375rem;`;