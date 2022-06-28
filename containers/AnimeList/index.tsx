import Skeleton from '@/components/Skeleton';
import Layouts from '@/layouts';
import { IAnimeList } from './animeList.types';
import useAction from './hooks/useAction';
import CollectionList from './partials/CollectionList';
import List from './partials/List';
import { AnimeListStyled } from './styled';

const AnimeList = ({type}:IAnimeList) => {
  const { animeList = [], loading } = useAction()
  const renderList = () => {
    if(type === 'collection') {
      return <CollectionList />
    }
    return (
      <List 
        animeList={animeList} 
        loading={loading} 
      />
    )
  }
  const newLoading = (
    Boolean(loading) || animeList?.length === 0
  ).toString();
  return (
    <Layouts>
      <AnimeListStyled 
        loading={newLoading}
      >
       {renderList()}
      </AnimeListStyled>
    </Layouts>
  )
}

export default AnimeList;
