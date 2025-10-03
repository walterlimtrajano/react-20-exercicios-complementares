 export default function EstiloInline() {
  const estilo = {
    color: "green",
    backgroundColor: "yellow",
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "bold"
  };

  return (
    <div style={estilo}>
      Texto com estilo inline 🎨
    </div>
  );
}

