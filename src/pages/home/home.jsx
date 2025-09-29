import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom';
import Praias from '../praias/praias.jsx';
import Zoologico from '../zoologico/zoologico.jsx';
import Historia from '../historia/historia.jsx';

function Home() {
  const [count, setCount] = useState(0)
    
  return (
    <>
        <h1>Seja bem Vindo a João Pessoa!</h1>
        <BrowserRouter>
        {/* Navigation */}
        <nav>
        <Link className="link" to="/historia">Historia</Link>{" "}
        <Link className="link" to="/praias">Praias</Link> {" "}
        <Link className="link" to="/zoologico">Zoologico</Link> {" "}
      </nav>

      {/* Rotas */}
      <Routes>
        <Route path="/historia" element={<Historia />} />
        <Route path="/praias" element={<Praias />} />
        <Route path="/zoologico" element={<Zoologico />} />
      </Routes>
        </BrowserRouter>
    </>
  )
}

export default Home