import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemList/ItemListContainer'



function App() {


  return (
    <>
      
      <NavBar/>
      
      <ItemListContainer greeting={"Proximamente"}/>

    </>
  )
}

export default App
