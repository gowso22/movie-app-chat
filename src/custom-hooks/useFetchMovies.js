import  { useEffect, useState } from 'react';



function useFetchMovies(){

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [err, setErr] = useState("");
  
    useEffect(() => {
        fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year` // api 가져오기
      )
        .then((response) => response.json())
        .then((json) => {
          setMovies(json.data.movies);
          setLoading(false);
         
        }).catch((error) => {
          setErr(error);
          setLoading(false);
        });
    }, [])

  

    return {loading, movies, err} ;
}


export default useFetchMovies;