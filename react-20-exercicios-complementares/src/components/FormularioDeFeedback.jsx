 import { useState } from "react";

export default function FormularioDeFeedback() {
  const [nome, setNome] = useState("");
  const [feedback, setFeedback] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      nome,
      feedback
    });
    setNome("");
    setFeedback("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Feedback</h1>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Digite seu feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      ></textarea>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}


