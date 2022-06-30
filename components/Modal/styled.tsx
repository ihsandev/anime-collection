import styled  from "@emotion/styled";

interface IModalStyledProp {
  isShow?: boolean;
}

export const ModalStyled = styled.div<IModalStyledProp>`
  position: fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background-color: rgba(0,0,0,0.2);
  z-index: 9999;
  transition: 0.5 ease;
  display: ${({isShow}) => isShow ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
`

export const ModalContentStyled  = styled.div`
  position: relative;
  padding: 1rem;
  z-index: 99999;
  background-color: white;
  min-height: 150px;
  min-width: 200px;
  max-width: 500px;
  border-radius: 1rem;
`

export const ModalTitle = styled.h1`
  font-size: 1.2rem;
`

export const ModalDesc = styled.p`
  font-size: 1.3rem;
  margin-top: 1.5rem;
`

export const ModalBody = styled.div`
  box-sizing: border-box;
`

export const ModalFooter = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  margin-top: 2.5rem;
  align-items: center;
  > button:first-of-type {
    margin-right: 1rem;
  }
`

export const ModalClose = styled.span`
  position:absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`