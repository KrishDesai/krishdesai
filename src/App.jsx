
import Navbar from "./components/Navbar"
import About from "./components/About"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Projects from "./components/Projects"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"> 
      <div className="fixed top-0 -z-10 h-full w-full"> 
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-black"></div>
      </div>
      <div className="container mx-auto">
        <Navbar/> 
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
      </div>
    </div>
    
    
  )
}


export default App