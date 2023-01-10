import { useEffect, useState } from "react"
import Pagination from "components/Pagination/Pagination"
// import { toast } from 'react-hot-toast';
import { toast } from "react-toastify";

import MoviesList from "components/MoviesList/MoviesList"
import { getTrendMovies } from "services/movieApi"

const customId = "custom-id-yes";

const Home = () => {
    const [page, setPage] = useState(1);
    const [total_pages, setTotal_pages] = useState(2)
    const [responsePagination, setResponsePagination] = useState(false)
    const [trendMovies, setTrendMovies] = useState([])
    console.log(trendMovies)    
  

    useEffect(() => {
        async function getMovies() {
            try {
                const response = await getTrendMovies(page)
                setTrendMovies(() => [...response.results])
                setTotal_pages(response.total_pages)
                console.log(total_pages)
                
                if (response.total_pages !== 0) {
                    setResponsePagination(true)
                }
                if (response.total_pages === 0) {
                    setResponsePagination(false)
                }                
            } catch (e) {
                console.error(e)
          }    
       }
        getMovies()
        return 
    },[page, total_pages]   
    )
    
    if (trendMovies.length === 0) {
        // return toast('Sorry, try again later')
        toast.error('No respoce from server'
        , { toastId: customId, });              
      }
    
    const handleChange = (e, p) => {
        setPage(p);
    };
          
    return (
        <>
            {responsePagination && <Pagination page={page} total_pages={total_pages} onChange={handleChange} />}
            <MoviesList Movies={trendMovies}  /> 
            {trendMovies.length === 0 && <h1 style={{ textAlign: "center" }}>Sorry, try again later</h1>}           
            {responsePagination && <Pagination page={page} total_pages={total_pages} onChange={handleChange} />}
            
        </>        
    )
}

export default Home;