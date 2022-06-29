import { IColors, ITheme } from "@/styles/theme.type";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import Button from "../Button";

interface ICard {
  image?: string;
  title?: string;
  sizeImg?: string | number;
  onClick?: () => void;
  onBtnAction?: () => void;
  actionType?: string;
}

const Card = ({image, title, sizeImg, onClick, onBtnAction, actionType}: ICard) => {
  const { colors } : ITheme = useTheme()
  return (
    <CardWrapperStyled>
      <CardStyled colors={colors} onClick={onClick}>
        <Image 
          src={image || 'http://placehold.jp/200x200.png'}
          height={sizeImg || '100%'}
          width={sizeImg || '100%'}
          objectFit='cover'
          blurDataURL="http://placehold.jp/200x200.png"
        />
        <TitleStyled colors={colors}>
          {title}
        </TitleStyled>
      </CardStyled>
      {onBtnAction && (
        <DeleteStyled onClick={onBtnAction}>
          <Button.Icon type={actionType} iconSize={20} />
        </DeleteStyled>
      )}
    </CardWrapperStyled>
  )
}

interface CardStyledProp {
  colors?: IColors;
}

interface TitleStyledProp {
  colors?: IColors;
}

const CardWrapperStyled = styled.div`
  position: relative;
`

const CardStyled = styled.div<CardStyledProp>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1.5px solid ${({colors}) => colors?.dark};
  padding: 1rem;
  border-radius: 0.5rem;
`

const TitleStyled = styled.h2<TitleStyledProp>`
  margin-top: 1rem;
  color: ${({colors}) => colors?.darkBlue};
  font-size: 1rem;
`

const DeleteStyled = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 9;
`

export default Card;