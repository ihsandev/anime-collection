import { ITheme } from "@/styles/theme.type";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { MdBookmark, MdDelete } from 'react-icons/md'

interface IIcon {
  type?: string;
  iconSize?: number | string;
}

const Icon = ({type, iconSize}: IIcon) => {
  const { colors } : ITheme = useTheme()
  const renderIcon = () => {
    if(type === 'bookmark') {
      return <MdBookmark size={iconSize} />
    } else if(type === 'delete') {
      return <MdDelete size={iconSize} />
    }
  }
  
  const getColorType = () => {
    let color = colors?.danger;
    if(type === 'bookmark') {
      color = colors?.darkBlue;
    }
    return color;
  }

  return (
    <ButtonIconStyled color={getColorType()}>
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
  color: white;
`

export default Icon;
