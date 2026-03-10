import React, { useState } from "react";

const Contador = () => {
  // Estado Inicial: count definido como zero
  const [count, setCount] = useState(0);

  // Função de Incremento: aumenta o valor em um
  const incrementarContador = () => {
    setCount(count + 1);
  };

  // Renderização: exibe o valor e o botão com o evento onClick
  return (
    <div
      style={{ textAlign: "center", fontFamily: "Arial", marginTop: "50px" }}
    >
      <h1>Contador: {count}</h1>
      <button
        onClick={incrementarContador}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Clique aqui
      </button>
    </div>
  );
};

export default Contador;
