
import About from "./components/About"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { Projects } from "./components/Projects"


import { HexagonPattern } from "@/components/ui/hexagon-pattern"

function App() {
  return (
    <>     
      <main className="relative min-h-screen w-full overflow-hidden bg-background">

                <HexagonPattern radius={40} x={-1} y={-1} strokeDasharray="4 2" />

                <div className="z-10 relative ">

                        <div className="p-5 md:px-[7%]">
                          <Navbar/>
                          <Home/>
                        </div>
                          <About/>
                        <div className="p-5 md:px-[7%]">
                              <Experience/>
                              <Projects />
                        </div> 
                        <Footer/>

                </div>
         
         
      </main>    
    </>
  )
}

export default App
