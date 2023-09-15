const express = require('express')
const { v4: uuidv4 } = require('uuid');
const app = express()
app.use(express.json())

const alunos = {}

// MÉTODO GET - ROTA BARRA
app.get('/', (req, res) => {
    res.json({ msg: "Hello!" })
})


// MÉTODO GET - ROTA PESQUISAR (GET by Id)
app.get('/pesquisar/:id', (req, res) => {
    res.json({ aluno: alunos[req.params.id] })
})

// MÉTODO PUT - ROTA EDITAR
app.put('/editar', (req, res) => {
    const id = req.query.id
    if (id && alunos[id]) {
        const aluno = req.body
        aluno.id = id
        alunos[id] = aluno
        res.json({ msg: "Cadastro atualizado com sucesso!" })
    } else {
        res.status(400).json({ msg: "Registro não encontrado!" })
    }

})

// MÉTODO DELETE - ROTA EXCLUIR
app.delete('/excluir', (req, res) => {
    const id = req.query.id
    if (id && alunos[id]) {
        delete alunos[id]
        res.json({ msg: "Aluno deletado da base de dados com sucesso!" })
    } else {
        res.status(400).json({ msg: "Aluno não encontrado!" })
    }
})

// MÉTODO POST - ROTA CADASTRAR
app.post('/cadastrar', (req, res) => {
    const aluno = req.body
    const idAluno = uuidv4()
    aluno.id = idAluno
    alunos[idAluno] = aluno
    res.json({ msg: "Aluno adicionado com sucesso!" })
})

// MÉTODO GET - ROTA LISTAR
app.get('/listar', (req, res) => {
    res.json({ listar: Object.values(alunos) })
})

// INICIALIZANDO O SERVIDOR
app.listen(8080, () => {
    console.log('Servidor pronto na porta 8080')
})