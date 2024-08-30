import express from 'express'  // Importa o framework Express para criar e gerenciar rotas e servidores.
import { PrismaClient } from '@prisma/client'  // Importa o cliente Prisma para interagir com o banco de dados.

const router = express.Router()  // Cria um roteador do Express para gerenciar rotas específicas.
const prisma = new PrismaClient()  // Cria uma instância do PrismaClient para acessar o banco de dados.

router.get('/listar-usuarios', async (req, res) => {  // Define uma rota GET para listar usuários.

    try {
        const users = await prisma.user.findMany()  // Consulta o banco de dados para obter todos os usuários.

        res.status(200).json({ message: 'Usuarios listados com sucesso', users })  // Retorna os usuários em formato JSON com status 200 (sucesso).
    } catch (err) {
        console.log(err)  // Loga o erro no console para depuração.
        res.status(500).json({ message: 'Falha no servidor' })  // Retorna uma resposta de erro com status 500 (erro no servidor).
    }
})

export default router  // Exporta o roteador para ser utilizado em outras partes da aplicação.
