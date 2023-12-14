import { styled } from "styled-components";

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(245, 245, 245, 0.7);
  border-radius: 0.375em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

  padding: calc(0.5em - 1px) calc(0.75em - 1px);
`;

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding-left: calc(0.75em - 1px);

  font-size: 14px;
  line-height: 1.5;
  color: black;
  background-color: transparent;
  color: #676c7e;

  &::placeholder {
    color: #d0d0d0;
  }
`;
