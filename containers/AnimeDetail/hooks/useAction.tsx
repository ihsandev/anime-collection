import { getFromLocalStorage } from "@/helpers";
import { gql, useQuery } from "@apollo/client"
import useAppContext from "context/appContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IAnimeDetail } from "../animeDetail.types";

export default function useAction() {
  const router = useRouter()
  const id = router?.query?.id;
  const isListDetail = router?.pathname === '/[id]'
  const isCollectionDetail = router?.pathname === '/collection/[id]'

  const GET_ANIME_DETAIL = gql`
    query ($id: Int) {
      Media (id: $id) {
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
  `

  const {
    loading, data,
  } = useQuery(GET_ANIME_DETAIL, {
    variables: {
      id
    } ,
    ssr: true,
    notifyOnNetworkStatusChange: true,
  });

  const {state, dispatch} = useAppContext()

  useEffect(() => {
    if(isListDetail && data) {
      dispatch({type: 'SET_ANIME_DETAIL', payload: data?.Media})
    }
  }, [id, data])

  const getDataCollectionDetail = () => {
    const storage = getFromLocalStorage('collections')
    if(storage) {
      const newData = storage?.filter((item: IAnimeDetail) => String(item.id) === String(id))[0]
      dispatch({type: 'SET_COLLECTION_DETAIL', payload: newData})
    }
  }

  useEffect(() => {
    if(isCollectionDetail) {
      getDataCollectionDetail()
    }
  }, [id])

  return {
    animeDetail: state.animeDetail,
    loading,
    collection: state.collectionDetail
  }
}