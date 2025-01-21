import { StrictMode } from "react";
import { createRoot } from "react-dom/client";  // Verifique se o caminho está correto
import App from "./App";  // Certifique-se que o caminho para App.jsx esteja correto

// Encontre o contêiner com id="root"
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);  // Cria o root para renderização
  root.render(
    <StrictMode>
      <App />  {/* Renderiza o componente App */}
    </StrictMode>
  );
} else {
  console.error("Elemento com id 'root' não encontrado.");
}
