import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header() {
    return (
        <div>
            <header className="header-container">

                <nav className="navbar">
                    <Link to="/">
                        <div className='container-brand'>
                            <img src='https://cdn0.iconfinder.com/data/icons/movie-basic-twotone/48/Cinema_Movie_Basics_Artboard_18-512.png' alt='logo' />
                            <span className='website-name'>Find A Movie</span>

                        </div>
                    </Link >
                    <p className='credit'>Made by Haim Kalvo</p>

                </nav>
            </header>
        </div >
    )
}
