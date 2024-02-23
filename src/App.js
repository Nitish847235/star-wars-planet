import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Residents from "./pages/Residents";
import { useState } from "react";

import Planets from "./pages/Planets";
import Navbar from "./layout/navbar/Navbar";


function App() {

  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };
  return (
    <div className={`min-h-screen ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-slate-200'}`}>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route exact path="/" element={<Home mode={mode} />} />
        <Route exact path="/residents/:id" element={<Residents  mode={mode} />} />
        <Route exact path="/planets/:id" element={<Planets  mode={mode} />} />
      
      </Routes>
    </Router>
  
  </div>
  );
}

export default App;
