import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page1 from './pages/page1/Page1.jsx';
import Home from './pages/Home.jsx';

import Page2 from './pages/page2/Page2.jsx'; // Add import

function App() {

 const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: "404 Not Found",
    },
    {
      path: '/page1',
      element: <Page1 />,
    },
    {
      path: '/page2',
      element: <Page2 />,
    },
  ]);

  return (
 
  <RouterProvider router={router} />
  )
}

export default App
