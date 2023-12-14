import { StyledInput, StyledInputWrapper, StyledIcon } from "./styles";

interface IInputProps {
  type: "text" | "number";
  value: string | number;
  setvalue: React.Dispatch<React.SetStateAction<string>>;
  icon?: any;
  placeholder?: string;
}

const Input = ({ type, value, setvalue, icon, placeholder }: IInputProps) => {
  return (
    <StyledInputWrapper>
      <StyledIcon>{icon && icon}</StyledIcon>
      <StyledInput
        type={type}
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        placeholder={placeholder ? placeholder : ""}
      />
    </StyledInputWrapper>
  );
};

export default Input;
