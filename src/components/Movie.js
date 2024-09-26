import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMovie } from '../actions/movieActions';
import { addFavorite, deleteFavorite, flashMovie } from './../actions/favoriteActions'

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const {movies, favorites} = props;
    const movie = movies.find(movie=>movie.id===Number(id));

    function handleDelete(id) {
        props.deleteMovie(id)
        props.deleteFavorite(id)
        push('/movies')
    }
    function handleFavorite(movie) {
         const found = favorites.filter(item => {
             return item.id === movie.id
         })
        if(found.length === 0) {
            props.addFavorite(movie)
        }
        else {
            props.flashMovie(movie.id)
        }
        
    }
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span onClick={() => {handleFavorite(movie)}}className="m-2 btn btn-dark">Favorite</span>
                            <span className="delete"><input type="button" onClick={() => {handleDelete(movie.id)}} className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return {
        movies: state.movie.movies,
        displayFavorites: state.favorite.displayFavorites,
        favorites : state.favorite.favorites
    }
}

export default connect(mapStateToProps, { deleteMovie, addFavorite, deleteFavorite, flashMovie })(Movie);