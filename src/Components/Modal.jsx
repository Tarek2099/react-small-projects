import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClick }) => {
  return createPortal(
    <div className="modal">
      <h1>Modal</h1>
      <p>This is a modal</p>
      <button onClick={onClick}>Close</button>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
