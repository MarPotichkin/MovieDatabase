import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailMovies from './components/DetailMovies';
import FavoriteMovies from './components/FavoriteMovies';
import ListOfMovies from './components/ListOfMovies';
import Login from './components/Login';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<ListOfMovies/>}></Route>
        <Route path="/favorite" element={<FavoriteMovies/>}></Route>
        <Route path="/detail/:id" element={<DetailMovies/>}></Route>
      </Routes>
    </>
  );
}

export default App;
