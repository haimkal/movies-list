import React from 'react'
import './TurnPage.css'

export default function TurnPage({ page, goToNextPage, goToPrevPage }) {
    return (
        <div>
            <div className="nextAndPrev">
                <button onClick={() => goToPrevPage()} href="!#" disabled={page === 1} className={`prev ${page === 1 ? 'disabled' : ''} `} > Previous</button>
                {page}
                <button onClick={() => goToNextPage()} href="!#" className='next' > next</button>

            </div>
        </div>
    )
}
