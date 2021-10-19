import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { moviesList, getUser} from '../store/actions';

class Home extends Component{
    getMovieHandler(){
        this.props.dispatch(moviesList());
    }

    getUserHandler(){
        this.props.dispatch(getUser());
    }

    render(){
        console.log(this.props);
        const {movies} = this.props;
        return(
            <>
                {movies && movies.moviesList?
                    movies.moviesList.map(item =>(
                        <div key={item.id}>
                            Name: {item.name}
                        </div>))
                    : null}
                <button onClick={()=>this.getMovieHandler()}>
                    Get Movies
                </button>
                <button onClick={()=>this.getUserHandler()}>
                    Get Users
                </button>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { movies: state.movies}
}

export default connect(mapStateToProps)(Home);