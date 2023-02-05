import React from 'react'
import Fave from './Fave'
import FilmPoster from './FilmPoster'

export default function FilmRow(props) {
    let d = new Date(props.film.release_date)
    let year = d.getFullYear()
    console.log(props)
    return (
        <div className="film-row" onClick={() => props.handleDetailsClick(props.film)}>
            <FilmPoster film ={props.film}/>
        
            <div className="film-summary">
                <h1>{props.film.title}</h1>
                <p>{year}</p>
            </div>
            <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave}/>
        </div>
    )

}
