import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom';
import Praias from '../praias/praias.jsx';
import Zoologico from '../zoologico/zoologico.jsx';
import Historia from '../historia/historia.jsx';
import './home.css'
import bandeira from '../../images/bandeira_jp.png'

function Home() {
    
  return (
    <>
        <div className='main'>
            
            <h1>Seja Bem Vindo a João Pessoa!</h1>

            <div id="img_container">
                <img src={bandeira} alt="Bandeira de João Pessoa" id="bandeira"/>
            </div>
           
            <BrowserRouter>
            {/* Navigation */}
            <nav className="nav_links">
              <Link className="link" to="/historia">História</Link>{" "}
              <Link className="link" to="/praias">Praias</Link> {" "}
              <Link className="link" to="/zoologico">Zoológico</Link> {" "}
            </nav>
    
          {/* Rotas */}
          <Routes>
            <Route path="/historia" element={<Historia />} />
            <Route path="/praias" element={<Praias />} />
            <Route path="/zoologico" element={<Zoologico />} />
          </Routes>
            </BrowserRouter>
        
        </div>
    </>
  )
}


export default Home