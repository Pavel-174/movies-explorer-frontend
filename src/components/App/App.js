import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Header from '../Header/Header'
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <Header/>
        <Main/>
        <Routes>
          <Route path="/movies" component={Movies} />
          <Route path="/saved-movies" component={SavedMovies} />
          <Route path="/profile" component={Profile} />
          <Route path="/signin" component={Login}/>
          <Route path="/signup" component={Register} />
        </Routes>
      </div>
  );
}

export default App;
