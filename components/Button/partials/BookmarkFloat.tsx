import { ITheme } from "@/styles/theme.type";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { MdBookmark } from "react-icons/md";

interface IBookmark {
  active?: boolean;
  onClick?: () => void;
}

const Bookmark = ({active, onClick}: IBookmark) => {
  const { colors } : ITheme = useTheme()
  return (
    <BookmarkStyled 
      onClick={onClick}
      color={active ? colors?.darkBlue : colors?.light}>
      <MdBookmark size={30} 
        color={active ? colors?.light : colors?.darkBlue} 
      />
    </BookmarkStyled>
  )
}

const BookmarkStyled = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  bottom: 6rem;
  right: 1rem;
  background-color: ${({color}) => color};
  color: white;
  z-index: 9;
  box-shadow: 1.5px 1.5px 3px rgba(0,0,0,0.2);
  @media only screen and (min-width: 600px) {
    right: 14rem;
  }
`

export default Bookmark;
