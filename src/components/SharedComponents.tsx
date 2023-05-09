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
    style?: any;
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

// TODO: make sure hover effects don't apply when disabled
export const Button = (props: ButtonProps) => {
    const {onClick, disabled, style, children} = props;
    return (
        <button
            className='p-2 border-2 border-solid border-[#0d6efd] rounded-md text-[#0d6efd] bg-[#ffffff] h-9 flex justify-center items-center
                        hover:text-white hover:bg-[#0d6efd] hover:cursor-pointer 
                        disabled:text-[#0d6efd80] disabled:border-[#0d6efd80] disabled:cursor-default'
            onClick={onClick}
            disabled={disabled}
            style={style}
        >
            {children}
        </button>
    )
}