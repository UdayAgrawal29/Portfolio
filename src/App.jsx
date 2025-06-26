import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Home from './pages/home'
import Navbar from './componets/navbar'

import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="main">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App;
