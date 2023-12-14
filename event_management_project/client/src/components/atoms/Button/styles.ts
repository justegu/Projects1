import { styled } from "styled-components";

export const StyledButton = styled.button`
  border-width: 1px;
  border-style: solid;
  border-radius: 0.375em;
  outline: none;
  padding: 5px 20px;

  background-color: transparent;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border-color: #3e8ed0;
  color: #3e8ed0;

  font-size: 0.9rem;
  line-height: 1.5;
  cursor: pointer;

  &:hover {
    opacity: 0.8;

    background-color: #3e8ed0;

    color: white;
  }
`;
