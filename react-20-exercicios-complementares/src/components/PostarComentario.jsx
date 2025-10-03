 import { useState } from "react";

export default function PostarComentario() {
  const [nome, setNome] = useState("");
  const [comentario, setComentario] = useState("");
  const [listaComentarios, setListaComentarios] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (nome && comentario) {
      const novoComentario = { nome, comentario };
      setListaComentarios([...listaComentarios, novoComentario]);
      setNome("");
      setComentario("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Postar Comentário</h1>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Escreva seu comentário"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Postar</button>
      </form>

      <h2>Comentários:</h2>
      <ul>
        {listaComentarios.map((c, index) => (
          <li key={index}>
            <strong>{c.nome}</strong>: {c.comentario}
          </li>
        ))}
      </ul>
    </div>
  );
}

