import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import MainPage from './page/MainPage/MainPage.jsx'
import OurPets from './page/OurPets/OurPets.jsx'
import './App.css'
import Footer from './components/Footer/Footer.jsx'
import Catalog from './page/Catalog/Catalog.jsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/ourpets' element={<OurPets />}/>
        <Route path='/catalog' element={<Catalog />}/>
      </Routes> 
      <Footer />
    </>
  )
}

export default App
