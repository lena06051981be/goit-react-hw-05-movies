import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f87210516a7f6fda7a5c975f08793382';
const setLanguage = 'en-US'

export const getTrendMovies = async (page = 1, signal) => {
   
    const response = await axios.get(
        `${BASE_URL}trending/movie/day`, {
            signal,
            params: {
              api_key: API_KEY,
              language: setLanguage,
              page: page,
            },
          });   
    console.log(response);
    return response.data;    
} 

export const getMovieDetails = async id => {
    const response = await axios.get(`${BASE_URL}movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: setLanguage,
      },
    });
    return response.data;
  };
  
  export const getMovieCredits = async id => {
    const response = await axios.get(`${BASE_URL}movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
        language: setLanguage,
      },
    });
    return response.data.cast;
  };
  
  export const getMovieReviews = async id => {
    const response = await axios.get(`${BASE_URL}movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
        language: setLanguage,
      },
    });
    return response.data.results;
  };
  
  export const getSearchMovie = async query => {
    const response = await axios.get(`${BASE_URL}search/movie`, {
      params: {
        api_key: API_KEY,
        language: setLanguage,
        query: query,
      },
    });
    return response.data.results;
  };
