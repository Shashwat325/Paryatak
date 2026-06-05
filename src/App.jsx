import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Packages from './pages/Packages'
import Destinations from './pages/Destinations'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'
export default function App() {
  const [activePage, setActivePage] = useState('Home')
  const [toast, setToast] = useState(null)

  function showToast(msg) {
    setToast(msg)
    setTimeout(() => setToast(null), 3500)
  }

  function navigate(page) {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const pages = {
    Home:         <Home setActivePage={navigate} showToast={showToast} />,
    Packages:     <Packages setActivePage={navigate} showToast={showToast} />,
    Destinations: <Destinations setActivePage={navigate} />,
    Contact:      <Contact showToast={showToast} />,
    About:      <About setActivePage={navigate} />
  }

  return (
    <>
      <Navbar activePage={activePage} setActivePage={navigate} />
      <main>{pages[activePage]}</main>
      <Footer setActivePage={navigate} />
      {toast && (
        <div className="toast">
          <span>✅</span> {toast}
        </div>
      )}
    </>
  )
}
