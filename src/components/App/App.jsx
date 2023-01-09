import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { NotFound } from "pages/NotFound/NotFound";

import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";
import Loader from "components/Loader/Loader";
import { Toaster } from "react-hot-toast";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('pages/Home/Home.jsx'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
        </Route>  
      </Routes>
      </Suspense>
      {/* <ToastContainer autoClose={2000} position="top-center" theme="light" /> */}
      <Toaster  position="top-center" />
    </>
  );
};


// <Suspense fallback={<div>Loading...</div>}></Suspense> 
