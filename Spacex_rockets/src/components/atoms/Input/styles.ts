import { styled } from "styled-components";

export const StyledInputWrapper = styled.div`
  width: 100%;
  max-width: 753px;
  height: 35px;

  display: flex;
  align-items: center;
  border: none;
  border-radius: 50px;
  background-color: #f5f5fa;

  padding: 4px 2px;
`;

export const StyledIcon = styled.span`
  font-size: 14px;
  color: #5a71e4;
  margin: 0 13px 0 15px;
`;

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;

  letter-spacing: 0.5px;

  color: #9b9eac;

  &::placeholder {
    color: #9b9eac;
  }
`;
