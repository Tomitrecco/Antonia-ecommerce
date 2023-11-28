
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Contacto from './components/Contacto/Contacto'
import Nosotros from './components/Nosotros/Nosotros'


function App() {


  return (
    <>
      <div>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/Nosotros' element={<Nosotros/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
          <Route path='*' element={<h1>404-NOT-FOUND</h1>}/>
        </Routes>
        
        </BrowserRouter>
        


      
      </div>
      
    </>
  )
}

export default App
