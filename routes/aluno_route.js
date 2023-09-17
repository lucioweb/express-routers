const express = require('express')
const { v4: uuidv4 } = require('uuid');
const router = express.Router()
const alunos = {}


// MÉTODO GET - ROTA PESQUISAR (GET by Id)
router.get('/:id', (req, res) => {
    res.json({ aluno: alunos[req.params.id] })
})

// MÉTODO PUT - ROTA EDITAR
router.put('/', (req, res) => {
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
router.delete('/', (req, res) => {
    const id = req.query.id
    if (id && alunos[id]) {
        delete alunos[id]
        res.json({ msg: "Aluno deletado da base de dados com sucesso!" })
    } else {
        res.status(400).json({ msg: "Aluno não encontrado!" })
    }
})

// MÉTODO POST - ROTA CADASTRAR
router.post('/', (req, res) => {
    const aluno = req.body
    const idAluno = uuidv4()
    aluno.id = idAluno
    alunos[idAluno] = aluno
    res.json({ msg: "Aluno adicionado com sucesso!" })
})

// MÉTODO GET - ROTA LISTAR
router.get('/', (req, res) => {
    res.json({ alunos: Object.values(alunos) })
})


module.exports = router