import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Users from './components/Users/Users.jsx';
import Categories from './components/Users/Categories.jsx';
import FoodBunker from './components/Users/FoodBunker.jsx';
import SeaFoods from './components/Users/SeaFoods.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/users',
        loader: () => fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element: <Users></Users>
      },
      {
        path: '/users/bunkers',
        loader: () => fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i="),
        element: <FoodBunker></FoodBunker>
      },
      {
        path: '/users/seafood',
        loader: () => fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"),
        element: <SeaFoods></SeaFoods>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
