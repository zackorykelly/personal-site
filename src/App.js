import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Experience from "./Pages/Experience";
import Blog from "./Pages/Blog";
import Portfolio from "./Pages/Portfolio";

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <div className="hero grow flex flex-col">
        <div className="max-w-5xl mx-auto p-4 grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
