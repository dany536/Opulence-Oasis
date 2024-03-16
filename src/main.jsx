import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Container/Home/home.jsx'
import About from './Container/About/about.jsx'
import Blogs from './Container/Blogs/blogs.jsx'
import Concierge from './Container/Concierge/concierge.jsx'
import Support from './Container/Support/support.jsx'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='blogs' element={<Blogs />} />
      <Route path='concierge' element={<Concierge />} />
      <Route path='support' element={<Support />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
