 
 
import Activities from './components/Activities'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TopBar from './components/TopBar'
import './index.css'

function App() {
 

  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App
