import './App.css'
import Home from './pages/home'
import Navbar from './pages/navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/register'

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="register" element={<Register/>} />
        </Routes>
    </>
  )
}

export default App
