import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ListContainer from './components/ListContainer/ListContainer'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <NavBar 
      />
      <ListContainer titulo="Greeting"
      />
      
      
    </div>
    
   
  )
}

export default App
