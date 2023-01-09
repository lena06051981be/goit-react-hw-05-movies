import { useEffect, useState } from "react"
import Pagination from "components/Pagination/Pagination"

import MoviesList from "components/MoviesList/MoviesList"
import { getTrendMovies } from "services/movieApi"



const Home = () => {
    const [page, setPage] = useState(1);
    const [total_pages, setTotal_pages] = useState(2)
    const [responsePagination, setResponsePagination] = useState(false)
    const [trendMovies, setTrendMovies] = useState([])
  

    useEffect(() => {
        const controller = new AbortController();
        async function getMovies() {
            try {
                const response = await getTrendMovies(page, controller.signal)
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
        // () => controller.abort()
    },[page, total_pages]   
    )
    
    
    const handleChange = (e, p) => {
        setPage(p);
    };

          
    return (
        <>
            {responsePagination && <Pagination page={page} total_pages={total_pages} onChange={handleChange} />}
            <MoviesList Movies={trendMovies}  />
            {responsePagination && <Pagination page={page} total_pages={total_pages} onChange={handleChange} />}
        </>
        
    )
}

export default Home