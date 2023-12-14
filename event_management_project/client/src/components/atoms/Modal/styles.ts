import { styled } from "styled-components";

export const StyledModalContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 350px;
  max-height: 500px;

  display: flex;
  padding: 1.25rem 1.5rem;

  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 0.375em;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  .modal-content {
    width: 100%;
    display: flex;
    flex-direction: column;

    .modal-close-button {
      align-self: end;
      border-width: 1px;
      border-style: solid;
      border-radius: 0.375em;
      outline: none;
      padding: 2px 10px;

      background-color: transparent;
      border-color: #f14668;
      color: #f14668;

      font-size: 0.9rem;
      line-height: 1.5;
      cursor: pointer;

      &:hover {
        opacity: 0.8;

        background-color: #f14668;

        color: white;
      }
    }

    .modal-children {
      width: 70%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 700px;
    max-height: 300px;
  }
`;
