export default function Destino({ pais }) {
  function mostrarDestino(pais) {
    if (pais === "BR") {
      return <h1>Brasil</h1>;
    } else {
      return <h2>Exterior</h2>;
    }
  }

  return (
    <div>
      {mostrarDestino(pais)}
      {mostrarDestino(pais)} {/* Chamado 2 vezes */}
    </div>
  );
}
