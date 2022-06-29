export type Action = {
  type: 'SET_ANIME_LIST' | 'SET_ANIME_DETAIL' | 'SET_COLLECTIONS' | 'SET_COLLECTION_DETAIL', 
  payload: any
}
export type Dispatch = (action: Action) => void
export type State = {
  animeList?: any, 
  animeDetail?: any,
  collections?: any,
  collectionDetail?: any,
}
export type AppProviderProps = {children: React.ReactNode}
