import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductMenu from './Fagito/Components/ProductMenu'
import UserInterface from './Fagito/Pages/UserInterface'
const App = () => {
  return (
    <> 
    <Routes>
        <Route path="/" Component={UserInterface}/>
        <Route path="/products/:firmId/:Restaurant_Name" Component={ProductMenu}/>
    </Routes>
    </>
  )
}

export default App