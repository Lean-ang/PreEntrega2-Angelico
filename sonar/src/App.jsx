import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ItemDetailContainer } from '../containers/ItemDetailContainer/ItemDetailContainer'
import { CartContainer} from '../containers/CartContainer/CartContainer'

import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <BrowserRouter>
      <NavBar 
      />
      <Routes>
        <Route path='/' element={<ItemListContainer titulo="Bienvenidos"/>} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
        <Route path='/detail/:productoId' element={<ItemDetailContainer/>} />
        <Route path='cart' element={<CartContainer/>} />
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      
    </BrowserRouter>
    
   
  )
}

export default App
