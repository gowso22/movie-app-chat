import React from 'react'
import useFetchMovies from '../custom-hooks/useFetchMovies';
import MovieList from '../components/MovieList';
import PageNation from '../components/PageNation';
import usePagenation from '../custom-hooks/usePagenation'


import './../css/style.css';

const Home = () => {
  const {loading, movies, err} = useFetchMovies();
  const {indexOfLast, indexofFirst, pageNumbers, setCurPage} = usePagenation();
  
  return(
    <div>
     
     
      {err && console.log(err)}
      {loading ? <h1>NOW Loading...</h1> :
                  <div id = "wrap"> 
                  { movies.slice(indexofFirst, indexOfLast).map((movie) => <MovieList key={movie.id} movie_info = {movie} />) }
                  </div>
                }
      <PageNation Nums = {pageNumbers} setPage = {setCurPage}/>

    </div>
  )


}

export default Home;