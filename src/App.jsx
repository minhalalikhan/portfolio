import { useState } from 'react'

import './App.scss'


import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mainwrapper'>
      <div className='wrapper'>

        {/* <Spline
          scene="https://prod.spline.design/BhEWZEc3ys8bOPyw/scene.splinecode"
        /> */}
        {/* <img src='/blob.png' /> */}

      </div>
      <Navbar />

      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>

  )
}

export default App
