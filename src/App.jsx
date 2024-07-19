import './App.css'
import Directions from './components/Directions'
import Features from './components/Features'
import Hero from './components/Hero'
import Message from './components/Message'
import Navbar from './components/Navbar'
import Questions from './components/Questions'
import Quote from './components/Quote'
import Story from './components/Story'
import Teachers from './components/Teachers'
import Footer from './components/MainFooter'
import Stats from './components/Stats'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Message />
      <Story />
      <Features />
      <Quote />
      <Directions />
      <Stats />
      <Teachers />
      <Questions />
      <Footer />
    </div>
  )
}

export default App
