import { StyledButton } from "./styles";

interface IButtonProps {
  text: string;
  action: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ text, action }: IButtonProps) => {
  return <StyledButton onClick={action}>{text}</StyledButton>;
};

export default Button;
