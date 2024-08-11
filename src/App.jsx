import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import NotFound from './components/notFound/NotFound'



const router= createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true, element:<Home/>},
    {path:'home', element:<Home/>},
    {path:'about', element:<About/>},
    {path:'portfolio', element:<Portfolio/>},
    {path:'contact', element:<Contact/>},
    {path:'*', element:<NotFound/>}
  ]}
])
function App() {
  

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
