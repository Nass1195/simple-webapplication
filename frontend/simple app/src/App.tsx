import { Routes, Route } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import Login from './pages/Login/Login'
function App() {
  return (
   <>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/login' element={<Login/>} />
    </Routes>
      
   </>
  )
}

export default App
