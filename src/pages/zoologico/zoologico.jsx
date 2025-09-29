import { useState } from 'react'

function Zoologico() {
  const [count, setCount] = useState(0)
    
  return (
    <>
    <h1>Zoológico de João Pessoa</h1>
 <p>
 O Parque Zoobotânico Arruda Câmara, conhecido como Bica, é um espaço
 de preservação ambiental que abriga diversas espécies de animais e
 uma rica área verde, sendo um ponto turístico e de lazer da cidade.
 </p>
    </>
  )
}

export default Zoologico