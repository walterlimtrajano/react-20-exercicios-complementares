 import styles from "./TemperaturaEstacao.module.css";

export default function TemperaturaEstacao({ estacao }) {
  let classe = "";

  if (estacao === "Verão") {
    classe = styles.verao;
  } else if (estacao === "Inverno") {
    classe = styles.inverno;
  } else if (estacao === "Outono") {
    classe = styles.outono;
  } else if (estacao === "Primavera") {
    classe = styles.primavera;
  }

  return <div className={classe}>Estação atual: {estacao}</div>;
}

