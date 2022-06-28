import { IColors, ITheme } from "@/styles/theme.type"
import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"

const Footer = () => {
  const { pathname = '' } = useRouter()
  const { colors }: ITheme = useTheme()

  return ( 
      <FooterStyled colors={colors}>
          <Link href={`/`}>
            <a className={['/'].includes(pathname) ? 'active' : ''}>
                List
            </a>
          </Link>
          <Link href={`/collection`}>
            <a className={['/collection'].includes(pathname) ? 'active' : ''}>
                Collection
            </a>
          </Link>
    </FooterStyled>
  )
}

interface FooterStyledProp {
  colors?: IColors;
}

const FooterStyled = styled.footer<FooterStyledProp>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({colors}:ITheme) => colors?.darkBlue};
  a {
    color: ${({colors}:ITheme) => colors?.light};
    text-decoration: none;
    font-size: large;
    text-align: center;
    padding: 1rem;
    flex: 1;
    &:hover,
    &.active {
      background-color: ${({colors}:ITheme) => colors?.lightBlue};
    }
  }
  box-sizing: border-box;
  z-index: 99;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  @media only screen and (min-width: 600px) {
    max-width: 1024px;
  }
`

export default Footer
