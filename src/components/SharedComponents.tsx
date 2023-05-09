import styled from 'styled-components';
import { ReactNode } from 'react';

const INPUT_AND_BUTTON_HEIGHT = "36px";

interface DivProps  {
    children: ReactNode[];
}

interface ImageProps {
    src: string;
}

interface InputProps {
    type: string;
    min: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
    value: string | number;
}

interface ButtonProps {
    onClick: () => any;
    disabled?: boolean;
    children: ReactNode | ReactNode[];
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

export const Image = ({src}: ImageProps) => {
    return (
        <img className='h-10 w-auto, ml-12' src={src} />
    )
}

export const Input = (props: InputProps) => {
    const {type, min, onChange, value} = props;

    return (
        <input 
            className='max-w-lg p-2 h-9 text-base font-medium flex-1 border border-solid border-gray-900 rounded-md'
            type={type}
            min={min}
            onChange={onChange}
            value={value}
        />
    )
}

// export const Button = styled.button`
//     padding: 6px;
//     border: 2px #0d6efd solid;
//     color: #0d6efd;
//     background-color: white;
//     border-radius: 5px;
//     height: ${INPUT_AND_BUTTON_HEIGHT};
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     &:hover:not(:disabled) {
//         color: white;
//         background-color: #0d6efd;
//         cursor: pointer;
//     }
//     &:disabled {
//         color: rgba(13, 110, 253, 0.5);
//         border-color: rgba(13, 110, 253, 0.5);
//     }`;

export const Button = (props: ButtonProps) => {
    const {onClick, disabled, children} = props;
    return (
        <button
            className='p-2 border-2 border-solid border-[#0d6efd] rounded-md text-[#0d6efd] bg-white h-9 flex justify-center items-center
                        hover:text-white hover:bg-[#0d6efd] hover:cursor-pointer 
                        disabled:text-[#0d6efd80] disabled:border-[#0d6efd80] disabled:cursor-default'
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}