import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <div className="hero bg-gray-700 min-h-screen flex justify-center items-center">
      <div className="text-white text-[26px]">Coming Soon!</div>
      <Routes>
        <Route path="/" element={<h1 className="text-2xl text-center"> </h1>} />
        <Route path="/about" element={<h1 className="text-2xl text-center"> </h1>} />
        <Route path="/portfolio" element={<h1 className="text-2xl text-center"> </h1>} />
        <Route path="/experience" element={<h1 className="text-2xl text-center"> </h1>} />
        <Route path="/contact" element={<h1 className="text-2xl text-center"> </h1>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
