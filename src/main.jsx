import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Container/Home/home.jsx'
import About from './Container/About/about.jsx'
import Blogs from './Container/Blogs/blogs.jsx'
import Concierge from './Container/Concierge/concierge.jsx'
import Support from './Container/Support/support.jsx'
import Test from './Container/Test/test.jsx'
import Boutique_Hotels from './Container/Boutique_Hotels/boutiqueHotels.jsx'
import Real_Estate from './Container/Real_Estate/realEstate.jsx'
import Holiday_Homes from './Container/Holiday_Homes/holidayHomes.jsx'
import Safari_Camps from './Container/Safari_Camps/safariCamps.jsx'
import Safari_Lodges from './Container/Safari_Lodges/safariLodges.jsx'

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
      <Route path='location/boutique-hotels' element={<Boutique_Hotels />} />
      <Route path='location/real-estate' element={<Real_Estate />} />
      <Route path='location/holiday-homes' element={<Holiday_Homes />} />
      <Route path='location/safari-camps' element={<Safari_Camps />} />
      <Route path='location/safari-lodges' element={<Safari_Lodges />} />

      <Route path='test' element={<Test />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
