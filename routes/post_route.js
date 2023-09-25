const express = require('express')
const { v4: uuidv4 } = require('uuid');
const router = express.Router() //Utilizando o roteador do express
const posts = {} // Variável do tipo objeto


// MÉTODO GET - ROTA PESQUISAR (GET by Id)
router.get('/:id', (req, res) => {
    res.json({ post: posts[req.params.id] })
})

// MÉTODO GET - ROTA LISTAR
router.get('/', (req, res) => {
    res.json({ posts: Object.values(posts) })
})

// MÉTODO POST - ROTA CADASTRAR
router.post('/', (req, res) => {
    const post = req.body
    const idPost = uuidv4()
    post.id = idPost
    posts[idPost] = post
    res.json({ msg: "Post adicionado com sucesso!" })
})

// MÉTODO PUT - ROTA EDITAR
router.put('/', (req, res) => {
    const id = req.query.id
    if (id && posts[id]) { // Se id  é válido e o post existe
        const post = req.body
        post.id = id
        posts[id] = post
        res.json({ msg: "Post atualizado com sucesso!" })
    } else {
        res.status(400).json({ msg: "Post não encontrado!" })
    }
})

// MÉTODO DELETE - ROTA EXCLUIR
router.delete('/', (req, res) => {
    const id = req.query.id
    if (id && posts[id]) {
        delete posts[id]
        res.json({ msg: "Post deletado da base de dados com sucesso!" })
    } else {
        res.status(400).json({ msg: "Post não encontrado!" })
    }
})


module.exports = router