import Filme from "./Filme";

export default function ListaDeFilmes({ filmes }) {
  return (
    <div>
      <h2>Lista de Filmes</h2>
      {filmes.map((f, index) => (
        <Filme key={index} titulo={f.titulo} diretor={f.diretor} ano={f.ano} />
      ))}
    </div>
  );
}
