import React from 'react';
import CardBase from './CardBase';
import Search from './Search';
import "../styles/listmovies.css"
import { Link } from 'react-router-dom';

const ListOfMovies = () => {
  return (
    <div className='cont'>
      <Search/>
      <div className='gridMovies'>
        <Link to={"/detail/1"}>
          <CardBase/>
        </Link>
        <CardBase/>
        <CardBase/>
        <CardBase/>
        <CardBase/>
        <CardBase/>
      </div>
    </div>
  )
}

export default ListOfMovies