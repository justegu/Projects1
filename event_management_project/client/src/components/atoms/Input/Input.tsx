import { ChangeEvent } from "react";
import { StyledInput, StyledInputWrapper } from "./styles";

interface IInputProps {
  type: "text" | "number" | "email";
  value: string | number | undefined;
  setValue: (v: string) => void;
  placeholder?: string;
}

const Input = ({ type, value, setValue, placeholder }: IInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(e.target.value);
    }
  };

  return (
    <StyledInputWrapper>
      <StyledInput
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder ? placeholder : ""}
      />
    </StyledInputWrapper>
  );
};

export default Input;
