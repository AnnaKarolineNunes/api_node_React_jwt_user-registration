import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import ListarUsuarios from "./pages/Lista";

function App() {
  return (
    <BrowserRouter>
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">Sistema de Cadastro de Usuários</h1>
        {/* Cabeçalho com o título do sistema */}
      </header>
      <Routes>
        <Route path="/" element={<Cadastro />} /> {/* Rota para a página de cadastro */}
        <Route path="/login" element={<Login />} /> {/* Rota para a página de login */}
        <Route path="/listar-usuarios" element={<ListarUsuarios />} /> {/* Rota para a página de listagem de usuários */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;  // Exporta o componente principal da aplicação
