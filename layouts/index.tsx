
import styled from "@emotion/styled";
import Footer from "./partials/Footer";

const Layouts = ({children}: any) => (
  <LayoutStyled>
    <MainStyled>
      {children}
    </MainStyled>
    <Footer />
  </LayoutStyled>
)

const LayoutStyled = styled.div`
  margin: 0 auto;
  @media only screen and (min-width: 600px) {
    max-width: 1024px;
  }
  position: relative;
  `

const MainStyled = styled.main`
  min-height: 100vh;
  padding: 1rem 1rem 5rem 1rem;
`

export default Layouts;
