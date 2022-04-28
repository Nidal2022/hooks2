
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
    Poster:'https://i.egycdn.com/pic/WmFwZndlY21UWWp2TnBqRWNtYm1MTnBUcHZtbQ.jpg',
    Rate:100,
    
  },
  {
    Id:Math.random(),
    Title:'The Batman',
    Released:'19 January 2022',
    Genre:'Action, Crime, Drama',
    Poster:'https://i.egycdn.com/pic/WmFwZndlY212bXBZWXZtRW12RWNjdHdsbXZtTE56UA.jpg',
    Rate:81,
    
  }
  ,
  {
    Id:Math.random(),
    Title:'Ambulance',
    Released:'02 February 2022',
    Genre:'Action, Police, Thriller',
    Poster:'https://i.egycdn.com/pic/WmFwZndlY212bVlURW1qbXBFRWNtRW1wdm1tbG1URW12.jpg',
    Rate:63,
    
  } ,
  {
    Id:Math.random(),
    Title:'The Northman',
    Released:'09 Mars 2022',
    Genre:'Action, Police, Thriller',
    Poster:'https://i.egycdn.com/pic/WmFwZndlY212bW12Y3ZObXZjdmNFY21HTm1tYndUZk5n.jpg',
    Rate:79,
    
  }
  ,
  {
    Id:Math.random(),
    Title:"Fortress: Sniper's Eye",
    Released:'25 December 2020',
    Genre:'Action, Police, Thriller',
    Poster:'https://i.egycdn.com/pic/WmFwZndlY212bXZtb3ROWUVFY3dUbXZOalBtWVRq.jpg',
    Rate:20,
    
  }
  ,
  {
    Id:Math.random(),
    Title:'Wrath of Man ',
    Released:'25 July 2021',
    Genre:'Action, Police, Thriller',
    Poster:'https://i.egycdn.com/pic/WmFwZndlY21Zam1wbW1ZYnZSY21FbW1hbWJ2TmptbWE.jpg',
    Rate:71,
    
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
