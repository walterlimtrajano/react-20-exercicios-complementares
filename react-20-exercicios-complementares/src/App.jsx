import OlaUsuario from "./components/OlaUsuario";
import Potenciacao from "./components/Potenciacao";
import RaizQuadrada from "./components/RaizQuadrada";
import Dobro from "./components/Dobro";
import Metade from "./components/Metade";
import ListaDeFilmes from "./components/ListaDeFilmes";
import MensagemClima from "./components/MensagemClima";
import Destino from "./components/Destino";
import StatusPedido from "./components/StatusPedido";
import MetroParaCentimetro from "./components/MetroParaCentimetro";
import CentimetroParaMetro from "./components/CentimetroParaMetro";
import RealParaDolar from "./components/RealParaDolar";
import DolarParaReal from "./components/DolarParaReal";
import EstiloInline from "./components/EstiloInline";
import EstiloDinamico from "./components/EstiloDinamico";
import DiaDaSemana from "./components/DiaDaSemana";
import TemperaturaEstacao from "./components/TemperaturaEstacao";
import ContadorDeCliques from "./components/ContadorDeCliques";
import SorteadorDeNumeros from "./components/SorteadorDeNumeros";
import SorteadorDeDados from "./components/SorteadorDeDados";
import FormularioDeFeedback from "./components/FormularioDeFeedback";
import FormularioDeLogin from "./components/FormularioDeLogin";
import PostarComentario from "./components/PostarComentario";

function App() {
  const filmes = [
    { titulo: "O Senhor dos Anéis", diretor: "Peter Jackson", ano: 2001 },
    { titulo: "Matrix", diretor: "Lana e Lilly Wachowski", ano: 1999 },
    { titulo: "Interestelar", diretor: "Christopher Nolan", ano: 2014 },
  ];

  return (
    <div>
      <OlaUsuario nome="Walter" />

      <Potenciacao numero={4} />
      <RaizQuadrada numero={16} />
      <Dobro numero={7} />
      <Metade numero={20} />

      <ListaDeFilmes filmes={filmes} />

      <MensagemClima clima="sol" />
      <MensagemClima clima="chuva" />
      <MensagemClima clima="nublado" />

      <Destino pais="BR" />
      <Destino pais="US" />

      <StatusPedido status="enviado" />
      <StatusPedido status="pendente" />
      <StatusPedido status="cancelado" />
      <StatusPedido status="outro" />

      <MetroParaCentimetro valor={2} />
      <CentimetroParaMetro valor={250} />

      <RealParaDolar valor={50} />
      <DolarParaReal valor={10} />

      <EstiloInline />
      <EstiloDinamico ativo={true} />
      <EstiloDinamico ativo={false} />

      <DiaDaSemana dia="Segunda" />
      <DiaDaSemana dia="Sexta" />
      <DiaDaSemana dia="Domingo" />
      <TemperaturaEstacao estacao="Verão" />
      <TemperaturaEstacao estacao="Inverno" />
      <TemperaturaEstacao estacao="Outono" />
      <TemperaturaEstacao estacao="Primavera" />

      <ContadorDeCliques />
      <SorteadorDeNumeros />
      <SorteadorDeDados />

      <FormularioDeFeedback />
      <FormularioDeLogin />
      <PostarComentario />
    </div>
  );
}

export default App;
