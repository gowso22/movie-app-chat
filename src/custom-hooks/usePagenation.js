import { useState } from 'react';
import useFetchMovies from './useFetchMovies';



function usePageNation(){

    const {movies} = useFetchMovies();

    const ITEM = 8;
    const [curPage, setCurPage] = useState(1);

    const indexOfLast = curPage * ITEM;
    const indexofFirst = indexOfLast - ITEM;

    const pageNumbers = [];

    for(let i = 1 ; i <= Math.ceil(movies.length / ITEM); i++){
        pageNumbers.push(i);
    }


    return {indexOfLast, indexofFirst, pageNumbers, setCurPage} ;
}


export default usePageNation;