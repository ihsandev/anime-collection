import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { IColors, ITheme } from '@/styles/theme.type'

const PageNotFound : NextPage = () => {
  const { colors }: ITheme = useTheme()

  return (
    <NotFoundStyled colors={colors}>
      <h1>404</h1> 
      <h2>Page Not Found</h2>
    </NotFoundStyled>
  )
}

interface NotFoundStyledProp {
  colors?: IColors;
}

const NotFoundStyled = styled.div<NotFoundStyledProp>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  > h1 {
    font-size: 8rem;
    color: ${({colors}:ITheme) => colors?.lightBlue}
  }
`

export default PageNotFound
