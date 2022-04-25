import React from 'react'

const List = (props) => {
  return (
    <div>
    {props.movies.map((movie,i)=><div  className='image-container d-flex  m-3'style={{display:"flex",justifyContent:'space-around'}}>
      <img src={movie.Poster} alt="movie" />
     <div><h3>Title: {movie.Title}</h3>
      <h3>Genre: {movie.Genre}</h3>
      <h3>Released :{movie.Released}</h3>
      </div>
    </div>)}
     
    </div>
  )
}

export default List