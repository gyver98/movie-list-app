import React, { PropTypes } from 'react';
import './FeaturedMovie.css';
import Link from 'react-router/Link';

const FeaturedMovie = ({ movie }) => (
  <div className="featured-movie">
    <div className="featured-movie_image">
      <Link to={`/movies/${movie.id}`}>
        <img src="{movie.image}" alt="{movie.name}"/>
      </Link>
    </div>
    <div className="featured-movie_info">
      <p><b>{movie.name}</b></p>
      <p>{movie.director}</p>
      <p>{movie.released}</p>
    </div>
  </div>
);


export default FeaturedMovie;