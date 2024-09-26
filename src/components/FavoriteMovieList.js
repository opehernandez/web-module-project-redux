import React from 'react';
import { connect } from 'react-redux';
import { deleteFavorite } from './../actions/favoriteActions'
import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const {favorites, movieToFlash} = props;


    function handleRemove(id) {
        props.deleteFavorite(id)
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {   
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className={movieToFlash === movie.id ? "flash btn btn-light savedButton" : "btn btn-light savedButton"} to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={() => {handleRemove(movie.id)}} className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return({
        favorites: state.favorite.favorites,
        movieToFlash: state.favorite.movieToFlash
    })

}
export default connect(mapStateToProps, { deleteFavorite })(FavoriteMovieList);