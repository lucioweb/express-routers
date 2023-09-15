# EXPRESS - EXERCÍCIO
### DEPENDÊNCIAS INSTALADAS
NODEMON

    npm install --save-dev nodemon


UUID
    
    
    npm install uuid --save

    
EXPRESS

    npm install express --save

### REQUISIÇÕES (api.http)

    GET http://localhost:8080/

    ###

    GET http://localhost:8080/alunos

    ###

    POST http://localhost:8080/alunos
    Content-type: application/json

    {
      "nome": "Lúcio",
      "endereco":"Rua Alexandrino de Alencar 1592",
      "RG": "1010297644/MD"
   
    }

    ###

    PUT http://localhost:8080/alunos?id=abe043be-b771-47cd-981f-a4dc8d936159
    Content-type: application/json

    {
      "nome": "Lúcio Lemos",
      "endereco":"Rua Alexandrino de Alencar 1592",
      "RG": "1010297644/MD"
   
    }

    ### 

    DELETE http://localhost:8080/alunos?id=abe043be-b771-47cd-981f-a4dc8d936159
