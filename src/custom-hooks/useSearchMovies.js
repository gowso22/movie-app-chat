import { useState } from "react";



const useSearchMovies = () =>{

    const [searchText, setSearchText] = useState("");
    const [searchMovies, setSearchMovies] = useState([]);
    const [err, setErr] = useState("");
  
    const handleSearchText = (e) => {
      setSearchText(e.target.value)
    }
  
    
    const handleSearchSubmit = (e) => {
  
        e.preventDefault();
     
        fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${searchText}`)
        .then((response) => response.json())
        .then((json) => {
            setSearchMovies(json.data.movies);
          }).catch((error) => {
            setErr(error);
          });
    
  
    }

    return {searchText, handleSearchText, handleSearchSubmit, searchMovies, err}

}

export default useSearchMovies;