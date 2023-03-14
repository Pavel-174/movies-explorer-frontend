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
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Navigation from '../Navigation/Navigation';


function App() {

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={
          <>
            <Header/>
            <Main/>
            <Footer/>
          </>
        }/>
        <Route path='/movies' element={
          <>
            <Header/>
            <Movies/>
            <Footer/>
            <Navigation/>
          </>
        }/>
        <Route path='/saved-movies' element={
          <>
            <Header/>
            <SavedMovies/>
            <Navigation/>
            <Footer/>
          </>
        }/>
        <Route path='/profile' element={
          <>
            <Header/>
            <Profile/>
            <Navigation/>
          </>
        } />
        <Route path='/signup' element={
          <Register/>
        } />
        <Route path='/signin' element={
          <Login/>
        }/>
        <Route path="*" element={
          <NotFound/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
