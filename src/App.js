import React from 'react';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Alunos from './components/Alunos';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="App">
      <p className="app-title"></p>
      <BrowserRouter>
        <Nav variant="tabs">
          <Nav.Link as={Link} to="/">Pagina Inicial</Nav.Link>
          <Nav.Link as={Link} to="/alunos">Cadastro de alunos</Nav.Link>
          <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
        </Nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alunos" element={<Alunos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
