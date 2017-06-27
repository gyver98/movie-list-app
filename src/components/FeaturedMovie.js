import React, { PropTypes } from 'react';
import './FeaturedMovie.css';

const FeaturedMovie = ({ movie }) => (
  <div className="featured-movie">
    <div className="featured-movie_image">
      <img src="{movie.image}" alt="{movie.name}"/>
    </div>
    <div className="featured-movie_info">
      <p><b>{movie.name}</b></p>
      <p>{movie.director}</p>
      <p>{movie.released}</p>
    </div>
  </div>
);


export default FeaturedMovie;