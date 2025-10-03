 import styles from "./DiaDaSemana.module.css";

export default function DiaDaSemana({ dia }) {
  let classe = "";
  let mensagem = "";

  if (dia === "Segunda") {
    classe = styles.segunda;
    mensagem = "Começo da semana!";
  } else if (dia === "Sexta") {
    classe = styles.sexta;
    mensagem = "Sextou!";
  } else if (dia === "Domingo") {
    classe = styles.domingo;
    mensagem = "Dia de descanso!";
  } else {
    mensagem = "Dia comum 😊";
  }

  return <div className={classe}>{mensagem}</div>;
}

