import React from 'react'

export default function FilmPoster(props) {
  let posterUrl = "https://image.tmdb.org/t/p/w780".concat(props.film.poster_path)
  // console.log(this.props.film.title, posterUrl)
  return (
    <div><img src={posterUrl} alt="" /></div>
  )
  
}
