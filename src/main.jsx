import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menu from './components/Menu/Menu.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/menu",
  element:<Menu />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);