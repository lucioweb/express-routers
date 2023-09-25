<img src="https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg" />

# EXPRESS ROUTES
Este é um projeto Node JS com express. 
Um CRUD básico que utiliza a extensão `REST Client` do VSCode para realizar requisições ao servidor via browser e testar a consistência das rotas no arquivo index.js.

### 1 - DEPENDÊNCIAS INSTALADAS

####  ✔️ NODEMON
  
    $ npm install --save-dev nodemon
A flag `--save-dev` indica que a biblioteca nodemon será instalada apenas como dependência de desenvolvimento. Por ocasião do deploy do projeto, essa dependência não será instalada no servidor de produção. 

####  ✔️ UUID
        
    $ npm install uuid --save


####  ✔️ EXPRESS

    $ npm install express --save
Tendo sua versão inicial lançada no ano de 2010, o Express.js (ou somente Express) é um Framework para o desenvolvimento de aplicações JavaScript com o Node.js. De código aberto, sob licença MIT, o `Express.js` foi desenvolvido para otimizar a construção de aplicações web e APIs, tornando-se um dos frameworks mais populares da internet.

##### Características do Express.js
O Express é um framework incrível e possui diversas características que facilitam o desenvolvimento de nossas aplicações. Dentre suas principais características, podemos citar:

* Possui um sistema de rotas completo;
* Possibilita o tratamento de exceções dentro da aplicação;
* Permite a integração de vários sistemas de templates que facilitam a criação de * páginas web para suas aplicações;
* Gerencia diferentes requisições HTTP com seus mais diversos verbos;
* Feito para a criação rápida de aplicações utilizando um conjunto pequeno de arquivos e pastas;
* Gerenciar requisições de diferentes verbos HTTP em diferentes URLs.
* Integrar "view engines" para inserir dados nos templates.
* Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta.
* Adicionar novos processos de requisição por meio de "middleware" em qualquer ponto da "fila" de requisições.

####  ✔️ AJV - VALIDAÇÃO
Agora que já temos o arquivo de rotas organizado, vamos ver como validar os dados de entrada. Para a validação, utilizaremos uma biblioteca muito conhecida no Javascript, a Ajv.   
     
    $ npm install ajv --save

####  ✔️ AJV FORMAT - VALIDAÇÃO
        
    $ npm install ajv-formats --save


### 2 - SCRIPT DE INICIALIZAÇÃO DO SERVIDOR EXPRESS NO `package.json` COM O NODEMON

    ...

    "scripts": {
      "dev": "nodemon app.js"      
     },

     ...


### 3 - EXTENSÕES VSCODE INSTALADAS

   