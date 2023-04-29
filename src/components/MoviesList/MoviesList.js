import React, { useEffect, useState } from 'react'
import { MovieService } from '../../services/movie.service'
import TurnPage from '../TurnPage'
import MovieCard from '../MovieCard'
import './MovieList.css'


// const movies = new MovieService()
// movies.getMovies()

export default function MoviesList() {
    console.log('render')
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

    const goToNextPage = () => setPage(page + 1)
    const goToPrevPage = () => setPage(page - 1)
    return (
        <>
            <ul className="movies-list" >
                {movies.map(movie => <MovieCard movie={movie} />)}
            </ul>
            <TurnPage page={page} goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} />
        </>
    )
}
