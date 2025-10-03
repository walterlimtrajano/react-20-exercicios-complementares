 export default function DolarParaReal({ valor }) {
  const taxa = 5; // 1 dólar = 5 reais
  return <p>US$ {valor} = R$ {(valor * taxa).toFixed(2)}</p>;
}

