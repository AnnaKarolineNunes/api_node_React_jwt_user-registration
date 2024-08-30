import { Link } from "react-router-dom"
import { useRef } from "react"
import api from "../../services/api"

function Cadastro() {

    const nameRef = useRef()  // Referência para o campo de nome
    const emailRef = useRef()  // Referência para o campo de email
    const passwordRef = useRef()  // Referência para o campo de senha

    async function handleSubmit(event) {
        event.preventDefault()  // Previne o recarregamento da página

        try {
            await api.post('/cadastro', {  // Envia os dados de cadastro para a API
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            alert("Usuário cadastrado")  // Alerta de sucesso
        } catch (err) {
            alert("Erro ao cadastrar usuário ")  // Alerta de erro
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>

            <form className="flex flex-col gap-5 " onSubmit={handleSubmit}>
                <input ref={nameRef} placeholder="Nome" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus: outline-none" />
                <input ref={emailRef} placeholder="Email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus: outline-none" />
                <input ref={passwordRef} placeholder="Senha" type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus: outline-none" />
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover: bg-blue-400">Cadastrar-se</button>
            </form>

            <Link to="/login" className="text-blue-700 hover:underline mt-4 block text-center">Já tem uma conta? Faça login </Link>
            {/* Link para redirecionar ao login */}
        </div>
    )
}

export default Cadastro  // Exporta o componente para ser usado em outros lugares
