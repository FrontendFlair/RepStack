import './App.css'
import Navbar from './Components/Navbar'
import NavbarContact from './Components/NavbarContact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blog from './Pages/Blog'
import Career from './Pages/Career'
import Podcast from './Pages/Podcast'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import CopyrightFooter from './Components/CopyrightFooter'
import WebDevlopment from './Pages/WebDevelopment'
import Ecommerce from './Pages/Ecommerce'
import VideoEditing from './Pages/VideoEditing'
import GraphicDesigning from './Pages/GraphicDesigning'
import MarketingAssociates from './Pages/MarketingAssociates'
import SalesDevelopmentReps from './Pages/SalesDevelopmentReps'
import AccountManager from './Pages/AccountManager'

function App() {
  return (
    <Router>
      <NavbarContact />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/virtual-marketing-associate-services" element={<MarketingAssociates />} />
        <Route path="/virtual-sales-development-rep" element={<SalesDevelopmentReps />} />
        <Route path="/virtual-account-manager-services" element={<AccountManager />} />
        <Route path="/web-development" element={<WebDevlopment />} />
        <Route path="/e-ccomerce" element={<Ecommerce />} />
        <Route path="/graphic-designing" element={<GraphicDesigning />} />
        <Route path="/video-editor" element={<VideoEditing />} />
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
