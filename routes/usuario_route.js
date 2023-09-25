const express = require('express')
const { v4: uuidv4 } = require('uuid');
const router = express.Router() //Utilizando o roteador do express
const usuarios = {} // Variável do tipo objeto

// Validação com AJV
const usuarioSchema = require('../schemas/usuario.schema')
const Ajv = require('ajv')
const ajv = new Ajv()
const addFormats = require("ajv-formats")
addFormats(ajv)


// MÉTODO GET - ROTA PESQUISAR (GET by Id)
router.get('/:id', (req, res) => {
    res.json({ usuario: usuarios[req.params.id] })
})

// MÉTODO GET - ROTA LISTAR
router.get('/', (req, res) => {
    res.json({ usuarios: Object.values(usuarios) })
})

// MÉTODO POST - ROTA CADASTRAR
router.post('/', (req, res) => {
    const usuario = req.body

    // Validação com AJV
    const validate = ajv.compile(usuarioSchema) // INSERÇÃO DE CÓDIGO ORINDO DO AJV
    const valid = validate(usuario) // INSERÇÃO DE CÓDIGO ORINDO DO AJV

    if (valid) {
        const idUsuario = uuidv4()
        usuario.id = idUsuario
        usuarios[idUsuario] = usuario
        res.json({ msg: "Usuario adicionado com sucesso!" })
    } else {
        res.status(400).json({ msg: "Dados inválidos", errors: validate.errors })
    }
})

// MÉTODO PUT - ROTA EDITAR
router.put('/', (req, res) => {
    const id = req.query.id
    if (id && usuarios[id]) { // Se id  é válido e o usuario existe
        const usuario = req.body
        usuario.id = id
        usuarios[id] = usuario
        res.json({ msg: "Cadastro atualizado com sucesso!" })
    } else {
        res.status(400).json({ msg: "Registro não encontrado!" })
    }
})

// MÉTODO DELETE - ROTA EXCLUIR
router.delete('/', (req, res) => {
    const id = req.query.id
    if (id && usuarios[id]) {
        delete usuarios[id]
        res.json({ msg: "Usuario deletado da base de dados com sucesso!" })
    } else {
        res.status(400).json({ msg: "Usuario não encontrado!" })
    }
})


module.exports = router