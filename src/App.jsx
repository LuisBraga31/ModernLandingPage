import FeatureSection from "./components/FeatureSection"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"

function App() {

  return (
    <>
      <NavBar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <FeatureSection/>
      </div>
     
    </>
  )
}

export default App
