import { IColors, ITheme } from "@/styles/theme.type";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

interface ICard {
  image?: string;
  title?: string;
  sizeImg?: string | number;
  onClick?: () => void;
}

const Card = ({image, title, sizeImg, onClick}: ICard) => {
  const { colors } : ITheme = useTheme()
  return (
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
  )
}

interface CardStyledProp {
  colors?: IColors;
}

interface TitleStyledProp {
  colors?: IColors;
}

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

export default Card;