import { createContext, useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AboutUsPage from './Components/AboutUsPage'
import ContactUsPage from './Components/ContactUsPage'
import Home from './Components/Home/Home'
import { Outlet, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ContactModal from './Components/Modal/ContactModal'
import FloatingWhatsApp from './Components/Modal/FloatingWhatsapp'

export const ContactModalContext = createContext()

function App() {

  const [isContactModalOpen, setContactModalOpen] = useState(false)
  const { pathname } = useLocation();

  useEffect(() => {

    const timeout_id = setTimeout(() => {
      setContactModalOpen(true)
    }, 3000)

    return () => {
      clearTimeout(timeout_id)
    }

  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
  toastStyle={{
    width: "350px",
    maxWidth: "90vw",
    borderRadius: "12px",
  }}
  style={{
    marginTop: "1rem",
  }}
/>
      <ContactModalContext value={{ isContactModalOpen, setContactModalOpen }}>
        <Header />
         {isContactModalOpen && <ContactModal />}
        <Outlet />
        <FloatingWhatsApp />
        <Footer />
      </ContactModalContext>
    </>
  )
}

export default App
