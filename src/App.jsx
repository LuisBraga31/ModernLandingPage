import FeatureSection from "./components/FeatureSection"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import WorkFlow from "./components/WorkFlow"

function App() {

  return (
    <>
      <NavBar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <FeatureSection/>
        <WorkFlow/>
      </div>
     
    </>
  )
}

export default App
