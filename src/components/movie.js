import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieData } from '../store/actions';

const Movies = (props) => {
    const movies = useSelector(state => state.movies)
    const dispatch = useDispatch();

    const getMovie = () => {
        //The error occurred here
        dispatch(movieData());
    }

    console.log(movies)
    return(
        <>
            {movies && movies.movieData?
                <div>
                    <div>Name:{movies.movieData.name}</div>
                    <div>Director:{movies.movieData.director}</div>
                    <div>Actors:{movies.movieData.actors}</div>
                    <div>Year:{movies.movieData.year}</div>
                </div>
                :null}
            <button onClick={ () => getMovie()}>
                Get Movies
            </button>
        </>
    );
}

export default Movies;

/*
import React from 'react';
import { connect } from 'react-redux';

const Movies = () => {
    return(
        <>
            Movie
        </>
    );
}

const mapStateToProps = (state) => {
    return { movies: state.movies}
}

export default connect(mapStateToProps)(Movies);*/
