import NavBar from '@/components/NavBar'
import Hero from '@/sections/Hero'
import Technologies from '@/sections/Technologies'
import './App.css'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <header className='w-full flex-col'>
        <NavBar/>
        <Hero/>
      </header>
      <main className='w-[90vw] mx-auto'>
        <Technologies/>
      </main>
      <Footer/>
    </>
  )
}

export default App