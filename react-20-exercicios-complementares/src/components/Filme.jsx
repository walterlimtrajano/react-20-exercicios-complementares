export default function Filme({ titulo, diretor, ano }) {
  return (
    <div>
      <h3>{titulo}</h3>
      <p>Diretor: {diretor}</p>
      <p>Ano: {ano}</p>
    </div>
  );
}
