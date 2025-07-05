import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import Add from './components/Add'
import { Route, Routes} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import { Admin } from './components/Admin'
import { User } from './components/User'
import AdminNav from './components/AdminNav'
import UserNav from './components/UserNav'

function App() {
  const [count, setCount] = useState(0)
 
      const user=JSON.parse(localStorage.getItem("user"));


  return (
    <>{
      user ?(
        user.userType==="admin" ?<AdminNav/>:<UserNav/>
      ):(
        <Navbar/>
      )
 }
      
     <Routes>
      <Route path='/add' element={<Add/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign' element={<Signup/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/user' element={<User/>}/>
</Routes>
    </>
  )
}

export default App
