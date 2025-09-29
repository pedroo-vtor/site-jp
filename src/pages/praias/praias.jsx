import { useState } from 'react'

function Praias() {
  const [count, setCount] = useState(0)
    
  return (
    <>
    <h1>Praias de João Pessoa</h1>
 <p>
 A cidade é famosa por suas praias de águas mornas e coqueirais.
 Entre as mais conhecidas estão Tambaú, Cabo Branco e Praia do Jacaré,
 famosa pelo pôr do sol ao som do Bolero de Ravel.
 </p>
    </>
  )
}

export default Praias