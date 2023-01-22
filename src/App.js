import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

function App() {

  //Temp - returns centered coming soon message for incomplete pages
  const comingSoon = () => {
    return (
      <div className="mx-auto my-auto">
        <div className="text-white text-[26px]">Coming Soon!</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <div className="hero grow flex flex-col">
        <div className="max-w-5xl mx-auto p-4 grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blog" element={comingSoon()} />
            <Route path="/portfolio" element={comingSoon()} />
            <Route path="/experience" element={comingSoon()} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
