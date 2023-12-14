import { styled } from "styled-components";

export const StyledItemsContainer = styled.div`
  max-width: 1114px;
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  position: relative;

  .top-button-container {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: end;

    gap: 30px;
    margin: 20px 0;

    .filter-div {
      width: 70%;
    }
    .button-div {
      width: 30%;
    }

    @media screen and (min-width: 768px) {
      .filter-div {
        width: 100%;
      }
    }
  }

  .table-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.375em;

    background-color: rgba(245, 245, 245, 0.7);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    .table-container__title {
      @media screen and (min-width: 768px) {
        display: flex;
        padding-left: 25px;
        padding-right: 25px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

        .title-container {
          width: 100%;
          display: flex;
        }
        .empty {
          width: 238px;
        }

        h4 {
          width: 100%;
          text-align: start;
          font-family: "Roboto";
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.1px;

          color: #676c7e;
        }
      }
    }
  }

  .no-result {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 14px;
    letter-spacing: 0.25px;
    color: #676c7e;

    align-self: center;
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .footer {
    position: static;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-top: 200px;

    text-align: center;

    @media screen and (min-width: 768px) {
      position: absolute;
      margin-top: 0;
    }
  }

  .success-delete-edit-save {
    width: 100%;
    text-align: center;
    font-size: 22px;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }

  .content.disabled {
    pointer-events: none;
    opacity: 0.7;
  }

  .pagination-container {
    .pagination-style {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      padding: 0.5em 0.75em;

      button {
        min-width: 2em;
        padding: 0.2em 0.6em;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 0.375em;

        background-color: rgba(245, 245, 245, 0.7);
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

        font-size: 0.9em;
        line-height: 1.4;
        color: #676c7e;

        cursor: pointer;

        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
          color: white;
        }
      }

      button.selected {
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
      }
    }
  }
`;

export const StyledResultNoResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .user-data-container {
    display: flex;
    flex-direction: row;

    padding: 15px 25px;
    gap: 10px;

    &:hover {
      background-color: rgba(211, 211, 211, 0.3);
    }

    .user-data-container-item-container {
      width: 100%;
      display: flex;
      flex-direction: column;

      justify-content: center;
      justify-items: center;
      text-justify: center;

      @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        gap: 25px;
      }

      .user-data-container-item {
        height: 30px;

        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 14px;
        letter-spacing: 0.25px;
        color: #676c7e;

        @media screen and (min-width: 768px) {
          min-width: 90px;
          width: 100%;
          display: flex;
          align-items: center;

          overflow: clip;

          &:hover {
            z-index: 99;
            overflow: visible;
          }
        }

        .title-and-items {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;

          div {
            padding: 0px;
          }

          @media screen and (min-width: 550px) {
            font-size: 16px;
            gap: 15px;
          }
        }
      }
    }

    .buttons-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      gap: 8px;

      .save-yes-cancel {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h5 {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 14px;
          letter-spacing: 0.25px;
          color: #676c7e;

          margin: 0;
          margin-bottom: 5px;
        }

        .save-yes-cancel__buttons-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
      }

      @media screen and (min-width: 768px) {
        max-width: 196px;
        width: 100%;
        display: flex;
        flex-direction: row;

        .save-yes-cancel {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 8px;
          justify-content: center;

          h5 {
            margin: 0;
            margin-bottom: 5px;
          }

          .save-yes-cancel__buttons-container {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 8px;
          }
        }
      }
    }
  }
`;

export const StyledAddNewUserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .addNewUser-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 50px;

    .addNewUser-container__box {
      width: 100%;
      display: flex;
      flex-direction: column;

      .addNewUser-container__box__item {
        width: 100%;
        display: flex;
        flex-direction: column;

        h5 {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 14px;
          letter-spacing: 0.25px;
          color: #676c7e;

          margin-bottom: 10px;
        }
      }

      @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 30px;
      }
    }
  }

  .button {
    width: 210px;
    align-self: end;

    button {
      width: 100%;
    }
  }
`;
