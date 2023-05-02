import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Error404 from './pages/Error404'

function App() {

  return (
    <div className="app">
      <div className='app_container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<Pokedex/>}/>
          </Route>
          <Route path='*' element={<Error404/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
