import React from 'react'
import { Link } from 'react-router-dom';
export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie-page/${movie.id}`}>
      <li>{movie.titleText.text}</li>
    </Link>
  )
}
