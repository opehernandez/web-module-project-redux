import { ADD_FAVORITE, REMOVE_FAVORITE, SHOW_FAVORITE } from '../actions/favoriteActions.js';

export const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            console.log('reducer')
            return {
                ...state, 
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE:
            console.log(state.favorites)
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        case SHOW_FAVORITE:
            return {
              ...state,
              displayFavorites : !state.displayFavorites
            }
        default:
            return state;
    }
}


export default reducer