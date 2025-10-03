 export default function RealParaDolar({ valor }) {
  const taxa = 5; // 1 dólar = 5 reais
  return <p>R$ {valor} = US$ {(valor / taxa).toFixed(2)}</p>;
}

