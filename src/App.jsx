import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home isDarkMode={isDarkMode} />
    </div>
  )
}

export default App
