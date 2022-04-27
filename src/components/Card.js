import React from 'react'
import { Card } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'

const MovieCard = ({movie}) => {
  return (
    <div  className='image-container d-flex  m-3'>
       
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.Poster} />
  <Card.Body>
    <Card.Title>{movie.Title}</Card.Title>
    
      <label htmlFor="">Genre:</label><h3> {movie.Genre}</h3>
      <label htmlFor="">Released :</label> <h3>{movie.Released}</h3>
      <label htmlFor="">Rate :</label> <Rating  ratingValue={movie.Rate} readonly='true'/* Available Props */ />
    
  </Card.Body>
</Card>
      </div>
  )
}

export default MovieCard
