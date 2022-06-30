import { IAnimeDetail } from '@/containers/AnimeDetail/animeDetail.types';
import { addToLocalStorage, getFromLocalStorage } from '@/helpers';
import { gql, useQuery } from '@apollo/client'
import useAppContext from 'context/appContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IAnimeMedia } from '../animeList.types';


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
          description
          coverImage {
            extraLarge
            color
          }
          bannerImage
          type
          status
          genres
          episodes
        }
      }
    } 
  `
  const perPage = 10;
  const [page, setPage] = useState(1)
  const { push, pathname } = useRouter()
  const isList = pathname === '/'
  const isCollection = pathname === '/collection'

  const { loading, data, fetchMore } = useQuery(
    GET_ANIME_LIST, {
    variables: {
      perPage,
      page
    } ,
    ssr: true,
    notifyOnNetworkStatusChange: true,
  });

  const {state, dispatch} = useAppContext()
  const [showModal, setIsShowModal] = useState(false)
  const [collectionId, setCollectionId] = useState('')

  const handleModal = (type = 'close', id?: any) => {
    if(type === 'open') {
      id && setCollectionId(id)
      setIsShowModal(true)  
    } else {
      setIsShowModal(false)
    }
  }

  useEffect(() => {
    if(isList && data) {
      const filterData = data?.Page?.media?.filter((item: IAnimeMedia) => 
        item?.title?.english !== null && item?.bannerImage !== null
      )
      dispatch({type: 'SET_ANIME_LIST', payload: filterData})
    }
  }, [data])

  useEffect(() => {
    const storage = getFromLocalStorage('collections')
    if(isList && storage) {
      dispatch({type: 'SET_COLLECTIONS', payload: storage})
    }
  }, [])

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
    if(isList) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  const handleClickDetail = (id:number, type: string = 'list') => {
    if(type === 'collection') {
      return push(`/collection/${id}`)
    } else {
      return push(`/${id}`)
    }
  }

  const handleRemove = () => {
    const storage = getFromLocalStorage('collections')
    if(storage) {
      const newData = storage?.filter((item: IAnimeDetail) => String(item.id) !== String(collectionId))
      addToLocalStorage('collections', newData)
      dispatch({type: 'SET_COLLECTIONS', payload: newData})
      handleModal('close')
    }
  }

  const getDataCollection = () => {
    const storage = getFromLocalStorage('collections')
    if(storage) {
      dispatch({type: 'SET_COLLECTIONS', payload: storage})
    }
  }

  useEffect(() => {
    if(isCollection) {
      getDataCollection()
    }
  }, [])

  return {
    animeList: state.animeList,
    loading,
    handleClickDetail,
    collections: state.collections,
    handleRemove,
    showModal, 
    handleModal
  }
}