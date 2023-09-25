const express = require('express')
const app = express()
const routeAluno = require('./routes/aluno_route')
const routePost = require('./routes/post_route')
const routeUsuario = require('./routes/usuario_route')
app.use(express.json()) //Tratamento de JSON


// MÉTODO GET - ROTA BARRA
app.get('/', (req, res) => {
    res.json({ msg: "Olá! Bem vindo ao projeto Node JS com Express!" })
})

app.use('/aluno', routeAluno)
app.use('/post', routePost)
app.use('/usuario', routeUsuario)

// INICIALIZANDO O SERVIDOR
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
})