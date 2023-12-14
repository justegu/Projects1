import React from "react";
import { StyledFullScreenLoader, Spinner } from "./styles";

const FullScreenLoader: React.FC = () => {
  return (
    <StyledFullScreenLoader>
      <Spinner />
    </StyledFullScreenLoader>
  );
};
export default FullScreenLoader;
