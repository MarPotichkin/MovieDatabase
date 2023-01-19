import { Route, Routes } from 'react-router-dom';
import './App.css';
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
      </Routes>
    </>
  );
}

export default App;
