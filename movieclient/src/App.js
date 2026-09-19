import { useState, useEffect } from 'react';
import './App.css';
import api, { apiURL } from './api/axiosConfig';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notfound/NotFound';

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get(apiURL);
      setMovies(response.data);
      console.log(movies);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`${apiURL}/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      console.log(movie);
      setReviews(singleMovie.reviews);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />}></Route>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer />}></Route>
          <Route
            path='/Reviews/:movieId'
            element={
              <Reviews
                key={movie?.imdbId}
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          ></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
