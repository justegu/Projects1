import { styled } from "styled-components";

export const StyledSearchFilterWrapper = styled.div`
  max-width: 1192px;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-top: 20px;
  padding: 27px 50px 100px 46px;

  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);

  background-color: #f5f5f6;
`;

export const StyledTitleContainer = styled.div`
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  border-radius: 8px;
  padding: 10px 17px 7px 24px;

  h1 {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;

    color: #283049;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;

    color: #676c7e;
  }

  input {
    background-color: #f5f5fa;
  }
`;
