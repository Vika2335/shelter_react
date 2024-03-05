import { Routes, Route } from 'react-router-dom'
import Header from './Header.jsx'
import MainPage from './MainPage.jsx'
import OurPets from './OurPets.jsx'
import './App.css'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/ourpets' element={<OurPets />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
