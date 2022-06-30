import reducer from '../reducer'

describe('Reducer', () => {
  const initialState = {
    animeList: [],
    animeDetail: {},
    collections: [],
    collectionDetail: {}
  };
  it('should equal action payload to return state', () => {
    expect(reducer(initialState, { 
      type: 'SET_ANIME_DETAIL', payload: { title: 'naruto' }
    })).toEqual({...initialState, animeDetail: { title: 'naruto' }});

    expect(reducer(initialState, { 
      type: 'SET_ANIME_LIST', payload: [{ title: 'naruto' } ]
    })).toEqual({...initialState, animeList: [{ title: 'naruto' }]});

    expect(reducer(initialState, { 
      type: 'SET_COLLECTION_DETAIL', payload: { title: 'naruto' }
    })).toEqual({...initialState, collectionDetail: { title: 'naruto' }});

    expect(reducer(initialState, { 
      type: 'SET_COLLECTIONS', payload: [{ title: 'naruto' } ]
    })).toEqual({...initialState, collections: [{ title: 'naruto' }]});
  });
})