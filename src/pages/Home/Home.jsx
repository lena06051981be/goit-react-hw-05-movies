import { useEffect, useState } from "react"
import Pagination from "components/Pagination/Pagination"

import MoviesList from "components/MoviesList/MoviesList"
import { getTrendMovies } from "services/movieApi"



const Home = () => {
    const [page, setPage] = useState(1);
    const [trendMovies, setTrendMovies] = useState([])
  

    useEffect(() => {
        const controller = new AbortController();
        async function getMovies() {
            try {
                const response = await getTrendMovies(page, controller.signal)
                setTrendMovies(() => [...response.results])
                
            } catch (e) {
                console.error(e)
          }    
       }
        getMovies()
        return 
        // () => controller.abort()
    },[page]   
    )
    
    
    const handleChange = (e, p) => {
        setPage(p);
    };

          
    return (
        <>
            <Pagination page={page} onChange={handleChange} />
            <MoviesList Movies={trendMovies}  />
            <Pagination page={page} onChange={handleChange}/>
        </>
        
    )
}

export default Home