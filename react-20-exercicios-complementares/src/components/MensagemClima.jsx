export default function MensagemClima({ clima }) {
  if (clima === "sol") {
    return <p>Dia de praia ☀️</p>;
  } else if (clima === "chuva") {
    return <p>Leve o guarda-chuva ☔️</p>;
  } else {
    return <p>Clima indefinido 🌍</p>;
  }
}

