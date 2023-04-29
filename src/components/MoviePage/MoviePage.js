import React from 'react'
import { useParams } from 'react-router-dom'

export default function MoviePage() {
    const { id } = useParams()
    return (
        <div>Movie Page {id}</div>
    )
}
