import { ModalBody, ModalClose, ModalContentStyled, ModalDesc, ModalFooter, ModalStyled, ModalTitle } from "./styled"
import { MdClose } from 'react-icons/md'
import { ReactNode, useState } from "react";
import Button from "../Button";

interface IModal {
  isShow: boolean;
  extContent?: ReactNode;
  title?: string;
  description?: ReactNode;
  isConfirm?: boolean;
  onYes?: any;
  onCancel?: any;
}

const Modal = ({ isShow, extContent, title, description, isConfirm, onYes, onCancel }: IModal) => {
  return (
    <ModalStyled isShow={isShow}>
      <ModalContentStyled>
        <ModalClose onClick={onCancel}>
          <MdClose size={20} />
        </ModalClose>
        {title && <ModalTitle>{title}</ModalTitle>}
        <ModalDesc>{description}</ModalDesc>
        {
          extContent && (
            <ModalBody>
              {extContent}
            </ModalBody>
          )
        }
        {isConfirm && (
          <ModalFooter>
            <Button.Default onClick={onYes}>Yes</Button.Default>
            <Button.Default 
              variant="danger" 
              onClick={onCancel}>
              Cancel
            </Button.Default>
          </ModalFooter>
        )}
      </ModalContentStyled>
    </ModalStyled>
  )
}

export default Modal;
