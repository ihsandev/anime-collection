import styled from "@emotion/styled";

export const CoverStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({color}) => color};
  border: 3px solid ${({color}) => color};
  position: relative;
  margin-bottom: 1rem;
  box-sizing: border-box;
`

export const TitleStyled = styled.h1`
  color: ${({color}) => color};
  margin: 1rem 0;
  font-size: 1.2rem;
`

export const DescriptionStyled = styled.div`
  font-size: 1rem;
`

export const AnimeTypeStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${({color}) => color};
  color: white;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
`

export const GenreStyled = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`

export const SubTitleStyled = styled.div`
  margin-bottom: 1rem;
  color: #838383;
  font-size: 0.8rem;
  span {
    font-weight: bold;
    color: ${({color}) => color};
    margin-left: 0.2rem;
  }
`