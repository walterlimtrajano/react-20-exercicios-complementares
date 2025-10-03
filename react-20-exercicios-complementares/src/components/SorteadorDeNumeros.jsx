import { useState } from "react";

export default function SorteadorDeNumeros() {
  const [numero, setNumero] = useState(null);

  function sortear() {
    const sorteado = Math.floor(Math.random() * 100) + 1;
    setNumero(sorteado);
  }

  return (
    <div>
      <h1>{numero ? `Número sorteado: ${numero}` : "Clique para sortear!"}</h1>
      <button onClick={sortear}>Sortear</button>
    </div>
  );
}
 
