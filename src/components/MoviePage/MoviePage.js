import React, { useEffect, useState } from 'react'
import { MovieService } from '../../services/movie.service'
import { useParams } from 'react-router-dom'
import './MoviePage.css'

export default function MoviePage() {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState()
    useEffect(() => {
        const getMovie = async () => {
            const movie = await MovieService.getMovie(id)
            return movie.results
        }
        getMovie().then(results => setMovieDetails(results));
        console.log('movie details:', movieDetails)
    }, [])

    return (
        movieDetails &&
        <div className='movie-page'>
            <h2>{movieDetails.titleText.text}</h2>
            <img className='movie-img'
                src={movieDetails.primaryImage?.url || '/place-holder.png'}
                alt={movieDetails.titleText.text} title={movieDetails.titleText.text}
            />
            <span className='release-date'>Release Date: {movieDetails.releaseYear.year}</span>
        </div>



    )
}
