import React from 'react'
import { Link } from 'react-router-dom';
import './MovieCard.css'
export default function MovieCard({ movie }) {
  return (
    <div className='movieCard' >
      <Link to={`/movie-page/${movie.id}`}>
        <li className='card'>{movie.titleText.text}</li>
        <img key={movie.primaryImage?.url} className='card-img' src={movie.primaryImage?.url || '/place-holder.png'}
          onError={({ currentTarget }) => currentTarget.src = '/place-holder.png'} />
      </Link>
    </div>
  )
}
