import styled from "@emotion/styled";
import { MdOutlineMoodBad  } from 'react-icons/md'

interface INotfound {
  iconSize?: number;
}

const NotFound = ({iconSize}: INotfound) => {
  return (
    <NotFoundStyled>
      <MdOutlineMoodBad size={iconSize || 100} />
      <h2>Data Not Found</h2>
    </NotFoundStyled>
  )
}

const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  border: 1px solid;
  min-height: 84vh;
  align-items: center;
  background-color: white;
  opacity: 0.5;
`

export default NotFound;
