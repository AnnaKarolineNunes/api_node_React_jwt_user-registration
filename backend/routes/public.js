import express from 'express'  // Importa o framework Express para criar e gerenciar rotas e servidores.
import bcrypt from 'bcrypt'  // Importa o bcrypt para realizar a criptografia de senhas.
import jwt from 'jsonwebtoken'  // Importa o jsonwebtoken para gerar e verificar tokens JWT.
import { PrismaClient } from '@prisma/client'  // Importa o cliente Prisma para interagir com o banco de dados.

const prisma = new PrismaClient()  // Cria uma instância do PrismaClient para acessar o banco de dados.
const router = express.Router()  // Cria um roteador do Express para gerenciar rotas específicas.

const JWT_SECRET = process.env.JWT_SECRET  // Obtém a chave secreta JWT das variáveis de ambiente.

// Rota para cadastro de novos usuários
router.post('/cadastro', async (req, res) => {
    try {
        const user = req.body  // Obtém os dados do usuário a partir do corpo da requisição.

        const salt = await bcrypt.genSalt(10)  // Gera um salt para a criptografia da senha.
        const hashPassword = await bcrypt.hash(user.password, salt)  // Criptografa a senha do usuário.

        // Cria um novo registro de usuário no banco de dados com a senha criptografada.
        const userDB = await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                password: hashPassword
            },
        })
        res.status(201).json(userDB)  // Retorna o usuário criado com status 201 (criado).
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor, tente novamente' })  // Retorna um erro de servidor com status 500.
    }
})

// Rota para login de usuários
router.post('/login', async (req, res) => {
    try {
        const userInfo = req.body  // Obtém as informações de login a partir do corpo da requisição.

        // Busca o usuário no banco de dados pelo email.
        const user = await prisma.user.findUnique({
            where: { email: userInfo.email }
        })

        // Verifica se o usuário existe no banco de dados.
        if (!user) {
            return res.status(404).json({ message: 'Usuario nao encontrado' })  // Retorna um erro 404 se o usuário não for encontrado.
        }

        // Compara a senha fornecida com a senha armazenada no banco de dados.
        const isMatch = await bcrypt.compare(userInfo.password, user.password)

        if (!isMatch) {
            return res.status(400).json({ message: 'Senha inválida' })  // Retorna um erro 400 se a senha estiver incorreta.
        }

        // Gera um token JWT para o usuário, válido por 1 dia.
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' })

        res.status(200).json(token)  // Retorna o token JWT com status 200 (sucesso).
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor, tente novamente' })  // Retorna um erro de servidor com status 500.
    }
})

export default router  // Exporta o roteador para ser utilizado em outras partes da aplicação.
