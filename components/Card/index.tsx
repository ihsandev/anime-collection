import { ITheme } from "@/styles/theme.type";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import Button from "../Button";
import { ICard } from "./card.types";
import { CardStyled, CardWrapperStyled, DeleteStyled, TitleStyled } from "./styled";

const Card = ({image, title, sizeImg, onClick, onBtnAction, actionType}: ICard) => {
  const { colors } : ITheme = useTheme()
  return (
    <CardWrapperStyled>
      <CardStyled
        data-testid='card-action'
        colors={colors} 
        onClick={onClick}
      >
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
        <DeleteStyled>
          <Button.Icon 
            type={actionType} 
            iconSize={20}
            onClick={onBtnAction}
          />
        </DeleteStyled>
      )}
    </CardWrapperStyled>
  )
}

export default Card;