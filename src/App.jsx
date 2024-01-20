import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { useState } from 'react'
function App() {
  const [category, setCategory] = useState("general")
  return (
    <>
      <Navbar setCategory={setCategory} />
      <Home category={category} />
    </>
  )
}

export default App
