# EXPRESS ROOUTES
Este é um projeto Node JS com express. 
Um CRUD básico que utiliza a extensão `REST Client` do VSCode para realizar requisições ao servidor via browser e testar a consistência das rotas no arquivo index.js.
### 1 - DEPENDÊNCIAS INSTALADAS

####  ✔️ NODEMON

    $ npm install --save-dev nodemon


####  ✔️ UUID
        
    $ npm install uuid --save


####  ✔️ EXPRESS

    $ npm install express --save

### 2 - SCRIPT DE INICIALIZAÇÃO DO SERVIDOR EXPRESS NO `package.json` COM O NODEMON

    ...

    "scripts": {
      "dev": "nodemon index.js"      
     },

     ...


### 3 - REQUISIÇÕES (api.http)

    GET http://localhost:8080/

    ###

    GET http://localhost:8080/listar

    ###

    POST http://localhost:8080/cadastrar
    Content-type: application/json

    {
      "nome": "Lúcio",
      "endereco":"Rua Alexandrino de Alencar 1592",
      "RG": "1010297644/MD"
   
    }

    ###

    PUT http://localhost:8080/editar?id=abe043be-b771-47cd-981f-a4dc8d936159
    Content-type: application/json

    {
      "nome": "Lúcio Lemos",
      "endereco":"Rua Alexandrino de Alencar 1592",
      "RG": "1010297644/MD"
   
    }

    ### 

    DELETE http://localhost:8080/excluir?id=abe043be-b771-47cd-981f-a4dc8d936159
