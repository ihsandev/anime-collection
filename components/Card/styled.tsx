import styled from "@emotion/styled"
import { CardStyledProp, TitleStyledProp } from "./card.types";

export const CardWrapperStyled = styled.div`
  position: relative;
`

export const CardStyled = styled.div<CardStyledProp>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1.5px solid ${({colors}) => colors?.dark};
  padding: 1rem;
  border-radius: 0.5rem;
  img { transition: 0.5s ease;}
  &:hover {
    border-color: ${({colors}) => colors?.darkBlue};
    img {
      transform: scale(1.5);
    }
  }
`

export const TitleStyled = styled.h2<TitleStyledProp>`
  margin-top: 1rem;
  color: ${({colors}) => colors?.darkBlue};
  font-size: 1rem;
`

export const DeleteStyled = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 9;
`