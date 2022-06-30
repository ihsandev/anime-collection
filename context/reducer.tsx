import { Action, State } from "./context.types";

export const initialState = { 
  animeList: [],
  animeDetail: {},
  collections: [],
  collectionDetail: {}
}

const reducer = (state:State = initialState, action:Action) => {
  switch (action.type) {
    case 'SET_ANIME_LIST':
      const payload = [...state.animeList, ...action.payload]
        .filter((elm, index, arr) =>
        index === arr.findIndex((item) => (
          item.id === elm.id
        ))
      )
      return {
        ...state,
        animeList: payload
      }
    case 'SET_ANIME_DETAIL':
      return {
        ...state,
        animeDetail: action.payload
      }
    case 'SET_COLLECTIONS':
      return {
        ...state,
        collections: action.payload
      }
    case 'SET_COLLECTION_DETAIL':
      return {
        ...state,
        collectionDetail: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
