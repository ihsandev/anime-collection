import { useContext, createContext, useReducer } from 'react'

type Action = {type: 'SET_ANIME_LIST' | 'SET_LOADING', payload: any}
type Dispatch = (action: Action) => void
type State = {animeList?: any, loading?: boolean}
type AppProviderProps = {children: React.ReactNode}

const AppContext = createContext<
{state: State; dispatch: Dispatch} | undefined
>(undefined)

const initialState = { 
  animeList: [],
  loading: false,
}

export const reducer = (state:State = initialState, action:Action) => {
  switch (action.type) {
    case 'SET_ANIME_LIST':
      return {
        ...state,
        animeList: [...state.animeList, ...action.payload]
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
}

export const AppProvider = ({children}: AppProviderProps) => {
  const [state, dispatch] : any = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
};

export default useAppContext;
