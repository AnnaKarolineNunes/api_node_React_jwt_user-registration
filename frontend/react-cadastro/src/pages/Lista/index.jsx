import { useEffect, useState } from "react"
import api from "../../services/api"

function ListarUsuarios() {
    const [allUsers, setAllUsers] = useState()  // Estado para armazenar a lista de usuários

    useEffect(() => {
        async function loadUsers() {

            const token = localStorage.getItem('token')  // Obtém o token de autenticação do localStorage
            const { data: { users } } = await api.get('/listar-usuarios', {
                headers: { Authorization: `Bearer ${token}` },  // Envia o token no cabeçalho da requisição
            })

            setAllUsers(users)  // Atualiza o estado com a lista de usuários recebida
        }

        loadUsers()  // Chama a função para carregar os usuários ao montar o componente
    }, [])  // O array vazio garante que o efeito seja executado apenas uma vez

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Lista de Usuários</h2>
            <ul className="space-y-2">
                {allUsers && allUsers.length > 0 && allUsers.map((user) => (  // Renderiza a lista de usuários se existir
                    <li key={user.id} className="bg-gray-100 p-4 rounded-md">
                        <p className="font-semibold">ID: {user.id}</p>
                        <p className="font-semibold">Nome: {user.name}</p>
                        <p className="font-semibold">Email: {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListarUsuarios  // Exporta o componente para ser usado em outros lugares
