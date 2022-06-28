import { gql, useQuery } from '@apollo/client'
import useAppContext from 'context/appContext';
import { useEffect, useState } from 'react';


export default function useAction() {
  const GET_ANIME_LIST = gql`
  query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (id: $id, search: $search) {
        id
        title {
          english
        }
        bannerImage
      }
    }
  } 
  `
  const perPage = 10;
  const [page, setPage] = useState(1)

  const {
    loading, data, fetchMore,
  } = useQuery(GET_ANIME_LIST, {
    variables: {
      perPage,
      page
    } ,
    ssr: true,
    notifyOnNetworkStatusChange: true,
  });

  const {state, dispatch} = useAppContext()

  useEffect(() => {
    if(data) {
      dispatch({type: 'SET_ANIME_LIST', payload: data?.Page?.media})
    }
  }, [data])

  const handleScroll = () => {
    const element = document.documentElement;
    const size = Math.ceil(window.innerHeight + element.scrollTop);
    if (size === element.offsetHeight && !loading) {
      setPage(page + 1); // load more data
      fetchMore({
        variables: {
          perPage,
          page
        },
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return {
    animeList: state.animeList,
    loading,
  }
}