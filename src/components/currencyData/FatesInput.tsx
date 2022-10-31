import { InputContainer, InputField, Image, Input, Button } from './SharedComponents';

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