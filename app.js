const express = require('express')
const app = express()
const routeAluno = require('./routes/aluno_route')
app.use(express.json())


// MÉTODO GET - ROTA BARRA
app.get('/', (req, res) => {
    res.json({ msg: "Olá! Bem vindo ao projeto Node JS com express!" })
})

app.use('/aluno', routeAluno)

// INICIALIZANDO O SERVIDOR
app.listen(8080, () => {
    console.log('Servidor pronto na porta 8080')
})