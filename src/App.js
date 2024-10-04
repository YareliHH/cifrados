import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Importa tus estilos aquí
import Cifrado from './Componentes/cifrado'; 
import Escitala from './Componentes/escitala'; 
import Información from './Componentes/informacion';
import RC6 from './Componentes/rc6';
import Rabin from './Componentes/rabin';
import Blake2 from './Componentes/blake2';
import Acercade from './Componentes/acercade';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Barra de navegación, botones para cambiar entre componentes */}
        <nav className="nav-buttons">
          <Link to="/cifrado-cesar">
            <button>Cifrado César</button>
          </Link>
          <Link to="/escitala">
            <button>Cifrado Escítala</button>
          </Link>
          <Link to="/rc6">
            <button>RC6</button>
          </Link>
          <Link to="/rabin">
            <button>Rabin</button>
          </Link>
          <Link to="/blake2">
            <button>Blake2</button>
          </Link>
          <Link to="/informacion">
            <button>Información</button>
          </Link>
          <Link to="/acercade">
            <button>Acerca de</button>
          </Link>
        </nav>

        {/* Contenido principal que cambiará según la ruta seleccionada */}
        <div className="content">
          <Routes>
            <Route path="/cifrado-cesar" element={<Cifrado />} />
            <Route path="/escitala" element={<Escitala />} />
            <Route path="/rc6" element={<RC6 />} />
            <Route path="/rabin" element={<Rabin />} />
            <Route path="/blake2" element={<Blake2 />} />
            <Route path="/informacion" element={<Información />} />
            <Route path="/acercade" element={<Acercade />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

