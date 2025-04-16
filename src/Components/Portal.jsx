import React, { useState } from "react";
import Modal from "./Modal";
const Portal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && <Modal onClick={closeModal} />}
    </div>
  );
};

export default Portal;
