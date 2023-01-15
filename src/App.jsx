import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Auth from './layout/Auth'
import Login from './paginas/Login'
import { LandinPage } from './paginas/LandinPage'
import { Register } from './paginas/Register'
import { Forgot } from './paginas/Forgot'
import { NotFound } from './paginas/NotFound'
import Dashboard from './layout/Dashboard'
import Listar from './paginas/Listar'
import Visualizar from './paginas/Visualizar'
import Crear from './paginas/Crear'
import Actualizar from './paginas/Actualizar'
import Perfil from './paginas/Perfil'
import { Confirmar } from './paginas/Confirmar'



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        
        <Route index element={<LandinPage/>}/>

        <Route path='/' element={<Auth/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='forgot/:id' element={<Forgot/>}/>
          <Route path='confirmar/:token' element={<Confirmar/>}/>
          <Route path='*' element={<NotFound />} />
        </Route>

        <Route path='/dashboard' element={<Dashboard/>}>
          <Route index element={<Perfil/>}/>
          <Route path='listar' element={<Listar/>}/>
          <Route path='visualizar/:id' element={<Visualizar/>}/>
          <Route path='crear' element={<Crear/>}/>
          <Route path='actualizar/:id' element={<Actualizar/>}/>
        </Route>




      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
