import './App.css'
import Navbar from './Components/Navbar'
import NavbarContact from './Components/NavbarContact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blog from './Pages/Blog'
import Career from './Pages/Career'
import Podcast from './Pages/Podcast'
import MarketingAssociate from './Pages/MarketingAssociate'
import SalesDevelopment from './Pages/SalesDevelopment'
import AccountManager from './Pages/AccountManager'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import CopyrightFooter from './Components/CopyrightFooter'

function App() {
  return (
    <Router>
      <NavbarContact />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketing-associate" element={<MarketingAssociate />} />
        <Route path="/sales-development" element={<SalesDevelopment />} />
        <Route path="/account-manager" element={<AccountManager />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
      <CopyrightFooter />
    </Router>
  )
}

export default App
