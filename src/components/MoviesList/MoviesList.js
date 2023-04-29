import React, { useEffect, useState } from 'react'
import { MovieService } from '../../services/movie.service'
import MovieCard from '../MovieCard'


// const movies = new MovieService()
// movies.getMovies()

export default function MoviesList() {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        const getMovies = async () => {
            const movies = await MovieService.getMovies(page)
            return movies.results
        }
        getMovies().then(results => setMovies(results));
    }, [page])
    console.log('Movies: ', movies)

    return (
        <ul className="movies-list">
            {movies.map(movie => <MovieCard movie={movie} />)}
        </ul>
    )
}
