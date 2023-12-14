import { styled } from "styled-components";

export const StyledItemsContainer = styled.div`
  width: 100%;
  display: flex;

  .table-container {
    width: 100%;
    display: flex;
    flex-direction: column;

    position: relative;

    .filter-options {
      display: flex;
      flex-direction: column;
      align-self: flex-end;

      position: absolute;
      top: 60px;

      background-color: #fff;
      box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
        0 0 0 1px rgb(10 10 10 / 2%);
      border-radius: 5px;

      h5 {
        font-size: 13px;
        font-weight: 400;
        padding: 13px 20px;
        margin: 0;
        border-bottom: 1px solid #f0f0f0;

        cursor: pointer;

        &:hover {
          font-weight: 600;
          background-color: #f0f0f0;
        }
      }
    }
  }

  .filter-icon {
    padding: 14px;
    align-self: flex-end;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: -5px;

    background-color: lightgrey;
    color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

    cursor: pointer;

    span {
      display: none;
      font-family: Roboto;
      margin-left: 5px;
    }

    &:hover,
    &.active,
    &:focus {
      background-color: #5a71e4;
      span {
        display: initial;
      }
    }
  }

  .table-container__title {
    display: grid;
    grid-template-columns: 0.35fr 1fr 1fr 1fr 1fr;

    padding-left: 29px;
    padding-right: 46px;
    margin-bottom: -15px;

    h5 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.1px;

      color: #676c7e;

      justify-self: flex-end;

      cursor: pointer;
    }
    h5:first-of-type {
      justify-self: flex-start;
    }

    h5:hover {
      font-weight: 700;
    }
  }

  .rocket-values {
    display: grid;
    grid-template-columns: 0.35fr 1fr 1fr 1fr 1fr;

    height: 49px;
    align-items: center;
    padding-left: 29px;
    padding-right: 46px;

    background-color: #fff;
    margin-bottom: 3px;
    border-radius: 8px;
  }
  .item-value {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.25px;
    color: #676c7e;

    justify-self: flex-end;
  }

  .item-value:first-of-type {
    justify-self: flex-start;
  }
  .result-no-result {
    display: flex;
    flex-direction: column;
  }
  .no-result {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.25px;
    color: #676c7e;

    align-self: center;
    margin-top: 80px;
  }
`;
