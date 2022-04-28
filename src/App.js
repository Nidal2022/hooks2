
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import List from './components/List';
import React,{ useState } from 'react';
import Add from './components/Add';
import Search from './components/Search';



const App =() => {
  const [movies, setMovies] = useState([{
    Id:Math.random(),
    Title:'Guardians of the Galaxy Vol. 2',
    
    Released:'05 May 2017',
    Genre:'Action, Adventure, Comedy',
    Poster:'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
    Rate:40,
    
  },
  {
    Id:Math.random(),
    Title:'Hitman',
   
    Released:'11 mars 2016',
    Genre:'Action, Adventure, nfiltration',
    Poster:'https://images-na.ssl-images-amazon.com/images/I/712zOn80uYL.jpg',
    Rate:50,
    
  },
  {
    Id:Math.random(),
    Title:'John Wick',
    Released:'19 September 2014',
    Genre:'Action, Police, Thriller',
    Poster:'https://i.scdn.co/image/ab67616d0000b273282ffbad2d2e6d7df2d3b355',
    Rate:100,
    
  }]);
  const [searchByValue, setsearchByValue] = useState("");
const [searchByRate, setsearchByRate] = useState(0)
  const handleSearchValue = (value) => {setsearchByValue(value)  }
  const handleSearchByRate = (rate) => {setsearchByRate(rate)  }
  const handleEdit = (id,editedMovie) => { setMovies(movies.map(
    (el)=>el.Id==id ? {...el,...editedMovie}:el
  )) }
  

 
  const AddMovie = (movie) => { setMovies([...movies,movie]) }
  return (
    <div className="container-fluid movie-app">
      <div className='row'>
        <Search handleSearchValue={handleSearchValue} handleSearchByRate={handleSearchByRate} 
       searchByRate={searchByRate} />
        <List movies={movies.filter(
          (el)=>el.Title.toLowerCase().includes(searchByValue.trim().toLowerCase())
          &&el.Rate>=searchByRate
        )} handleEdit={handleEdit}/>
    
      <Add addedMovie={AddMovie}/>
      
      
      </div>
      
    </div>
  );
}

export default App;
