import styled from 'styled-components';
import { ReactNode } from 'react';

const INPUT_AND_BUTTON_HEIGHT = "36px";

interface DivProps  {
    children: ReactNode[];
}

export const InputContainer = ({children}: DivProps) => {
    return (
        <div className='flex items-center gap-2 w-full mb-5'>
            {children}
        </div>
    )
}

export const InputField = ({children}: DivProps) => {
    return (
        <div className='flex justify-center items-center'>
            {children}
        </div>
    )
}

interface ImageProps {
    src: string;
}

export const Image = styled.img`
    height: 38px;
    width: auto;
    margin-right: -50;`;

// export const Image = ({src}: ImageProps) => {
//     return (
//         <img className='h-9 w-auto, -mr-12' src={src} />
//     )
// }

export const Input = styled.input`
    max-width: 500px;
    padding: 7px;
    height: ${INPUT_AND_BUTTON_HEIGHT};
    font-size: 1rem;
    font-weight: 500;
    
    flex: 1;

    border: 1px solid #ced4da;
    border-radius: 0.375rem;`;

export const Button = styled.button`
    padding: 6px;
    border: 2px #0d6efd solid;
    color: #0d6efd;
    background-color: white;
    border-radius: 5px;
    height: ${INPUT_AND_BUTTON_HEIGHT};
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover:not(:disabled) {
        color: white;
        background-color: #0d6efd;
        cursor: pointer;
    }
    &:disabled {
        color: rgba(13, 110, 253, 0.5);
        border-color: rgba(13, 110, 253, 0.5);
    }`;