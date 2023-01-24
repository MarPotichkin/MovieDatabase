import React from 'react'
import CardFavorite from './CardFavorite'
import Ranking from './Ranking'
import '../styles/favoritemovies.css'

const FavoriteMovies = () => {
  return (
    <div className='cont'>
      <Ranking/>
      <div className='contFav'>
        <CardFavorite/>
        <CardFavorite/>
        <CardFavorite/>
      </div>
    </div>
  )
}

export default FavoriteMovies