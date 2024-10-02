import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from '../Pages/Home/index.jsx';
import Watchlist from '../Pages/WatchList/index.jsx';
import MovieHome from '../Pages/MovieHome/index.jsx';
import Login from '../Pages/Login/index.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />  
      <Route path="homepage" element={<HomePage />} >
      <Route path="" element={<MovieHome />} />
      <Route path="watchlist" element={<Watchlist />} />
      </Route>
    </>
  ),
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
