import Layouts from '@/layouts';
import useAction from './hooks/useAction';
import List from './partials/List';
import { AnimeListStyled } from './styled';

const AnimeList = () => {
  const { animeList = [], loading } = useAction()
  const newLoading = (
    Boolean(loading) || animeList?.length === 0
  ).toString();
  return (
    <Layouts>
      <AnimeListStyled 
        loading={newLoading}
      >
       <List 
        animeList={animeList} 
        loading={loading} 
      />
      </AnimeListStyled>
    </Layouts>
  )
}

export default AnimeList;
