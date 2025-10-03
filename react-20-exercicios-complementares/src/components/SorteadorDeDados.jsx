 import { useState } from "react";

export default function SorteadorDeDados() {
  const [resultados, setResultados] = useState([]);

  function jogarDado() {
    const numero = Math.floor(Math.random() * 6) + 1;
    setResultados([...resultados, numero]);
  }

  return (
    <div>
      <h1>Sorteador de Dados 🎲</h1>
      <button onClick={jogarDado}>Jogar dado</button>
      <p>Resultados: {resultados.join(", ")}</p>
    </div>
  );
}

