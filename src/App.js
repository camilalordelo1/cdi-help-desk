import React from "react"
import { Routes, Route } from "react-router-dom";

import './App.scss'

import Home from "./pages/home/index";
import SistemasUnicamp from "./pages/sistemasUnicamp/index";
import DuploDiploma from "./pages/duploDiploma/index";
import AtividadesComplementares from "./pages/atividadesComplementares/index";
import Iniciacoes from "./pages/iniciacoes/index";
import Navbar from "./components/navbar/Navbar";

const App = () => {
    return (
      <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cdi-help-desk" element={<Home />} />
            <Route path="/sistemas-unicamp" element={<SistemasUnicamp />} />
            <Route path="/duplo-diploma" element={<DuploDiploma />} />
            <Route path="/atividades-complementares" element={<AtividadesComplementares />} />
            <Route path="/iniciacoes" element={<Iniciacoes />} />
          </Routes>
      </div> 
    )
}

export default App;