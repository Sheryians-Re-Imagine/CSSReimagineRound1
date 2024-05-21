import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/Home/About.jsx'
import Login from './components/Authentication/Login.jsx'
import Signup from './components/Authentication/Signup.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      
      <Route path='signup' element={<Signup/>} />
      <Route path='login' element={<Login/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
