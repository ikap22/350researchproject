import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Analysis from "./pages/Analysis";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Company from "./pages/Company";


function App(){

  
  // Initialize the app
  return (
    <BrowserRouter>
      <div className="App">
          <TopNav/>
          <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="analysis" element={<Analysis />} />
            <Route path="team" element={<Team />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
      
  )
}
export default App;


