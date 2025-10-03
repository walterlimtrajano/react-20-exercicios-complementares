 export default function EstiloDinamico({ ativo }) {
  const estilo = {
    backgroundColor: ativo ? "green" : "gray",
    color: ativo ? "white" : "black",
    padding: "20px",
    textAlign: "center",
    fontSize: "18px",
    borderRadius: "8px"
  };

  return (
    <div style={estilo}>
      {ativo ? "Ativo ✅" : "Inativo ❌"}
    </div>
  );
}
