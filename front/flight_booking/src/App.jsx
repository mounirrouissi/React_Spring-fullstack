import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Support from './components/Support/Support'
import Info from './components/Info/Info'
import Lounge from './components/Lounge/Lounge'
import Footer from './components/Footer/Footer'
import Subscribers from './components/Subscribers/Subscribers'
import Travellers from './components/Travelers/Travellers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      {/* <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travellers />
      <Subscribers/>
      <Footer/> */}
      </>
  )
}

export default App
