
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import List from './components/List';
import React,{ useState } from 'react';

const App =() => {
  const [movies, setMovies] = useState([{
    Title:'Guardians of the Galaxy Vol. 2',
    Year:'2017',
    Released:'05 May 2017',
    Genre:'Action, Adventure, Comedy',
    Poster:'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'
  },
  {
    Title:'Guardians of the Galaxy Vol. 2',
    Year:'2017',
    Released:'05 May 2017',
    Genre:'Action, Adventure, Comedy',
    Poster:'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'
  },
  {
    Title:'Guardians of the Galaxy Vol. 2',
    Year:'2017',
    Released:'05 May 2017',
    Genre:'Action, Adventure, Comedy',
    Poster:'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'
  }]);
 
  
  return (
    <div className="container-fluid movie-app">
      <div className='row'><List movies={movies}/></div>
     
     
    </div>
  );
}

export default App;
