import { gql, useQuery } from "@apollo/client"
import useAppContext from "context/appContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useAction() {
  const router = useRouter()
  const id = router?.query?.id;

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
    if(data) {
      dispatch({type: 'SET_ANIME_DETAIL', payload: data?.Media})
    }
  }, [id, data])

  return {
    animeDetail: state.animeDetail,
    loading
  }
}