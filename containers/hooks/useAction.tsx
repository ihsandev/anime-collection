import { addToLocalStorage, getFromLocalStorage } from "@/helpers"
import useAppContext from "context/appContext";
import { useRouter } from "next/router";
import { IAnimeDetail } from "../AnimeDetail/animeDetail.types"

export default function  useContainerAction() {
  const router = useRouter()
  const id = router?.query?.id;
  const isListDetail = router?.pathname === '/[id]'
  const isList = router?.pathname === '/'
  const {dispatch} = useAppContext()

  const addToCollection = (data?: any) => {
    const storage = getFromLocalStorage('collections')
    const newData = storage ? [...storage] : []
    newData.push(data)
    dispatch({type: 'SET_COLLECTIONS', payload: newData})
    addToLocalStorage('collections', newData)
  }
  
  const removeFromCollection = (paramId?:any) => {
    const storage = getFromLocalStorage('collections')
    if(storage) {
      const newData = storage?.filter((item: IAnimeDetail) => {
        if(isList) {
          return String(item.id) !== String(paramId)
        } else {
          return String(item.id) !== String(id)
        }
      })
      addToLocalStorage('collections', newData)
      dispatch({type: 'SET_COLLECTIONS', payload: newData})
    }
  }

  const checkIsBookmark = (paramId?: any) => {
    if(isListDetail || isList) {
      let result = false;
      const storage = getFromLocalStorage('collections')
      if(storage) {
        if(isList) {
          result = storage?.some((item: IAnimeDetail) => String(item['id']) === String(paramId))
        } else {
          result = storage?.some((item: IAnimeDetail) => String(item['id']) === String(id))
        }
      }
      return result;
    }
  }

  return {
    checkIsBookmark,
    addToCollection,
    removeFromCollection,
  }
}