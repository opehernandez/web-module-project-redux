export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const SHOW_FAVORITE = 'SHOW_FAVORITE'


export const addFavorite = (movie)=>{
    console.log('action')
    return({type: ADD_FAVORITE, payload:movie});
}

export const deleteFavorite = (data) => {
    return({type: REMOVE_FAVORITE, payload: data})
}
export const toogleShowFav = () => {
    return({type: SHOW_FAVORITE})
}