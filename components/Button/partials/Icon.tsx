import { ITheme } from "@/styles/theme.type";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { MdBookmark, MdDelete } from 'react-icons/md'

interface IIcon {
  type?: string;
  iconSize?: number | string;
  onClick?: () => void;
  isActive?: boolean;
}

const Icon = ({type, iconSize, onClick, isActive}: IIcon) => {
  const { colors } : ITheme = useTheme()
  const renderIcon = () => {
    if(type === 'bookmark') {
      return <MdBookmark size={iconSize} 
        color={isActive ? colors?.light : colors?.darkBlue} 
      />
    } else if(type === 'delete') {
      return <MdDelete size={iconSize} color={colors?.light} />
    }
  }
  
  const getColorType = () => {
    let color = colors?.danger;
    if(type === 'bookmark') {
      color = isActive ? colors?.darkBlue : colors?.light;
    }
    return color;
  }

  return (
    <ButtonIconStyled 
      color={getColorType()}
      onClick={onClick}
    >
      {renderIcon()}
    </ButtonIconStyled>
  )
}

const ButtonIconStyled  = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0.5rem;
  background-color: ${({color}) => color || 'darkgray'};
  cursor: pointer;
`

export default Icon;
