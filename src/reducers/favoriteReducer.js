import { ADD_FAVORITE, FLASH_MOVIE, REMOVE_FAVORITE, SHOW_FAVORITE } from '../actions/favoriteActions.js';

export const initialState = {
    favorites: [],
    displayFavorites: true,
    movieToFlash: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return {
                ...state, 
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        case SHOW_FAVORITE:
            return {
              ...state,
              displayFavorites : !state.displayFavorites
            }
        case FLASH_MOVIE:
            return {
              ...state,
              movieToFlash: action.payload
            }
        default:
            return state;
    }
}


export default reducer