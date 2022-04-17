import * as React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Cink, Dijabetes, Home, Kiselina, Kombinacija, Lumbalni, Neuropatija, Neuropatski, Politika, Stres} from './pages/index'


function App() {
  return (
    <Router>
        <div className='App'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/neuropatski-bol" element={<Neuropatski/>}/>
            <Route path="/stres" element={<Stres/>}/>
            <Route path="/dijabetes" element={<Dijabetes/>}/>
            <Route path="/kombinacija" element={<Kombinacija/>}/>
            <Route path="/cink" element={<Cink/>}/>
            <Route path="/lipoinska-kiselina" element={<Kiselina/>}/>
            <Route path="/lumbalni-bolni-sindrom" element={<Lumbalni/>}/>
            <Route path="/dijabetesna-neuropatija" element={<Neuropatija/>}/>
            <Route path="/politika-privatnosti" element={<Politika />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
