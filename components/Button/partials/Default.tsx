import { ITheme } from "@/styles/theme.type";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

interface IDefault {
  children?: ReactNode;
  variant?: string;
  onClick?: () => void;
}

const Default = ({children, variant, onClick}: IDefault) => {
  const { colors } : ITheme = useTheme()

  const getColorVariant = () => {
    let color = colors?.darkBlue;
    if(variant === 'danger') {
      color = colors?.danger;
    }
    return color;
  }

  return (
    <DefaultStyled color={getColorVariant()} onClick={onClick}>
      {children}
    </DefaultStyled>
  )
}

const DefaultStyled = styled.button`
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  background-color: ${({color}) => color};
  color: white;
  border-radius: 4px;
  cursor: pointer;
`

export default Default;