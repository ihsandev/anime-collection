import styled from "@emotion/styled";

interface IBadge {
  title?: string;
}

const Badge = ({title}: IBadge) => {
  return(
    <BadgeStyled>
      {title}
    </BadgeStyled>
  )
}

const BadgeStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  background-color: #d2d2d2;
  color: #494949;
  font-size: 0.8rem;
`

export default Badge;
