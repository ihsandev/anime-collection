import styled from "@emotion/styled";
import { AnimeListStyledProp } from "./animeList.types";

export const AnimeListStyled = styled.div<AnimeListStyledProp>`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  flex-direction: ${({loading}) => loading === 'true' ? 'column' : 'row'};
  > div {
    flex-grow: 1;
  }
  @media only screen and (min-width: 600px) {
    > div {
      flex: 1 0 21%;
    }
  }
`