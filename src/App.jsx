import './App.css'
import Sidebar from './Components/Sidebar'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ActiveCases from './Pages/ActiveCases'

function App() {
  

  return (
   <>
    <ActiveCases/>
    <Dashboard/>
    <Login/>
    <Register/>
   </>
  )
}

export default App
