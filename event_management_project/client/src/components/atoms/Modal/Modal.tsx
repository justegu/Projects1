import React, { ReactNode } from "react";
import { StyledModalContainer } from "./styles";

interface IModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<IModalProps> = ({ onClose, children }) => {
  return (
    <StyledModalContainer>
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          x
        </button>
        <div className="modal-children">{children}</div>
      </div>
    </StyledModalContainer>
  );
};

export default Modal;
