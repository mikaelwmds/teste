import React, { useState, useEffect } from "react";

// Simulação de dados de usuários (substitua com API real quando necessário)
const userData = [
  { id: 1, nome: "João Silva", email: "joao@exemplo.com", idade: 28 },
  { id: 2, nome: "Maria Oliveira", email: "maria@exemplo.com", idade: 34 },
  { id: 3, nome: "Carlos Souza", email: "carlos@exemplo.com", idade: 22 },
  { id: 4, nome: "Ana Pereira", email: "ana@exemplo.com", idade: 40 },
  { id: 5, nome: "Lucas Costa", email: "lucas@exemplo.com", idade: 25 },
];

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simula a busca dos dados dos usuários
  const fetchUsers = () => {
    setTimeout(() => {
      setUsers(userData);  // Definindo dados simulados como resposta
      setLoading(false);    // Atualiza o estado para indicar que os dados foram carregados
    }, 1000);  // Simula um atraso de 1 segundo
  };

  useEffect(() => {
    fetchUsers(); // Chama a função que simula a busca dos dados
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Lista de Usuários</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Nome</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>E-mail</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Idade</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.nome}</td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.email}</td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.idade}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: "center", padding: "8px" }}>
                  Nenhum usuário encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
