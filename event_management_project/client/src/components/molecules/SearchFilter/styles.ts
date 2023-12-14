import { styled } from "styled-components";

export const StyledSearchFilterWrapper = styled.div`
  width: 100%;
  margin: 1em;
  border-radius: 0.375em;

  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledSearchInputContainer = styled.div`
  padding: 0.5em 0.75em;
`;

export const StyledItemsContainer = styled.div`
  p {
    color: black;
    border-bottom: 1px solid black;
    padding: 0.5em 0.75em;

    span.item-before-value-and-value-container {
      display: flex;
      align-items: center;
      gap: 10px;

      span.item-before-value {
        width: 5%;
      }

      span.item-value {
        line-height: 1.5;
      }
    }
  }
`;

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0.5em 0.75em;

  button {
    min-width: 2em;
    padding: 0.2em 0.6em;
    border: 1px solid black;
    border-radius: 0.375em;

    background-color: white;

    font-size: 0.9em;
    line-height: 1.4;
    color: black;

    cursor: pointer;

    &:hover {
      background-color: yellow;
      color: green;
    }
  }

  button.selected {
    background-color: yellow;
    color: green;
  }
`;
