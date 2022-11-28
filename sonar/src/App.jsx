import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ListContainer from './components/ListContainer/ListContainer'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  let greeting=	'Bienvenido/a'

  return (
    <div>
      <NavBar 
      />
      <ListContainer 
      greeting={greeting}
      />
      
    </div>
    
   
  )
}

export default App
