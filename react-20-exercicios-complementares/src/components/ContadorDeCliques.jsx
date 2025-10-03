 import { useState } from "react";

export default function ContadorDeCliques() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>
  );
}

