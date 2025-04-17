import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";

const DefaultModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal dismissible show={isOpen} onClose={onClose}>
      <ModalHeader>
        <Button
          onClick={onClose}
          className="absolute top-2 right-2"
          color="gray"
        >
          X
        </Button>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};
export default DefaultModal;