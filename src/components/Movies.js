import React from 'react';
import Link from 'react-router/Link';
import movies from '../movies.json';
import './Movies.css';

const Movies = () => (
  <div>
    <h2 className="movies-header">
      Movies
    </h2>
    <hr/>
    <div className="movie-listings">
      {movies.map((movie, i) => (
        <div key={i}>
          <div className="movie-image">
            <Link to={`/movies/${movie.id}`}>
              <img src={movie.image} alt={movie.name}/>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Movies;