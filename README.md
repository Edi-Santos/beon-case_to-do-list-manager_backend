# Projeto Recebido pela Beon - To Do List Manager

### Sumário

1. [Sobre o Projeto](#sobre-o-projeto)
   - [Padrões de Projeto](#padrões-de-projeto)
   - [Tecnologias Utilizadas](#tecnologias-utilizadas)
2. [Como Rodar o Projeto Em Sua Máquina](#como-rodar-o-projeto-em-sua-máquina)
   - [Pré Requisitos](#pré-requisitos)
   - [Clonando o Projeto](#clonando-o-projeto)
   - [Instalando Dependências](#instalando-dependências)
   - [Rodando o Projeto](#rodando-o-projeto)
3. [Como Rodar os Testes em sua Máquina](#como-rodar-os-testes-em-sua-máquina)
   - [Rodando os Testes](#rodando-os-testes)
4. [Endpoints do Projeto](#endpoints-do-projeto)
   - [GET /tasks](#get-tasks)
   - [POST /tasks](#post-tasks)
   - [PUT /tasks/:id](#put-tasksid)
   - [DELETE /tasks/:id](#delete-tasksid)
5. [Considerações Finais](#considerações-finais)

## Sobre o Projeto
O Projeto __To Do List Manager__ é uma API que tem as funcionalidades de um CRUD básico (criar, ler, atualizar e deletar).

#### Padrões de Projeto
Busquei organizar as pastas e dividir as responsabilidades do código utilizando o modelo *MSC* (Model, Service e Controller) onde o `Model` é responsável pela interação direta com o banco de dados, o `Service` com as regras de negócio e o `Controller` sendo a camada de contato direto com o usuário. <br/>
Busquei também usar alguns dos princípios de *SOLID* tentando colocar em prática a as ideias de `Single Responsibility Principle`, `Open/Closed Principle` e `Dependency Inversion Principle`.

#### Tecnologias Utilizadas
Para este projeto eu utilizei as seguintes tecnologias:

- JavaScript (ES6)
- Node.JS
- Express
- MongoDB

Usei também as bibliotecas:

- nodemon
- joi

Para qualidade de código foi usado:

- eslint-config-trybe-backend
- mocha
- chai
- chai-http
- sinon
- mongodb-memory-server

## Como Rodar o Projeto Em Sua Máquina

#### Pré Requisitos
Primeiro, será necessário que você tenha instalado o Git, Node (NPM) e o MongoDB em sua máquina. Caso não tenha e precise de uma força, siga os tutoriais dos links abaixo.

<a href="https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git">Tutorial do Git</a> <br/>
<a href="https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos">Tutorial do Node</a> <br/>
<a href="https://medium.com/danieldiasjava/obtendo-e-configurando-o-mongodb-em-seu-ambiente-10ff98d868fa">Tutorial do MongoDB (Windows)</a> <br/>
<a href="https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-20-04-pt">Tutorial do MongoDB (Linux)</a> <br/>
<a href="https://www.oficinadanet.com.br/post/13367-instalando-mongodb-no-mac-os-x">Tutorial do MongoDB (MacOS)</a> <br/>

Você também precisará de um _client_ como o <a href="https://insomnia.rest/download">Insomnia</a> ou então o <a href="https://www.postman.com/">Postman</a> para fazer as requisições aos endpoints e poder testar a aplicação.<br/>
Se estiver com o código aberto pelo *VS Code* eu lhe sugiro que use a extensão <a href="https://www.thunderclient.com/">Thunder Client</a>.

#### Clonando o Projeto
Com o ambiente preparado, agora é preciso que você clone o projeto para sua máquina. <br/>

1. Dentro do repositório no GitHub, clique no botão ***`Code`*** (O único botão verde na tela).
2. Em seguida, copie o link do repositório.
3. Depois, abra o seu terminal, navegue até a pasta que deseja colocar o projeto e use o comando: 
```
git clone git@github.com:Edi-Santos/beon-case_to-do-list-manager_backend.git
```

#### Instalando Dependências
Com o projeto já clonado, através do seu terminal ainda aberto, entre na pasta raiz do projeto e rode o comando: <br/>
```
npm install
```
Assim serão instaladas todas as dependências necessárias para que se possa rodar o projeto.

#### Rodando o Projeto
Para rodar o projeto use o comando:
```
npm start
```
ou então:
```
npm run dev
```
Esta segunda opção rodará o projeto usando o `nodemon`.

## Como Rodar os Testes em sua Máquina
Para este projeto foram desenvolvidos _testes de integração_ usando as bibliotecas `mocha`, `chai` e `sinon`. Com o auxílio ainda do `chai-http` para simular as requisições aos endpoints e do `mongodb-memory-server` para "_mochar_" a conexão com o banco de dados.

#### Rodando os Testes
Para rodar todos os arquivos de testes execute o comando:
```
npm run test
```
>*__Obs__*: No meu pc, às vezes, é necessário rodar, pelo menos, duas vezes por conta do tempo de execução dos testes. Adicionei um _timeout_ de 6s na execução dos testes para diminuir a ocorrência deste erro.

O resultado do comando acima será o seguinte:

<img src="./readme_img/npm_run_test.png">

Caso queira rodar apenas 1 teste específico, você pode usar `.only` antes de um __describe__ ou __it__ em um arquivo de teste.

<img src="./readme_img/test_only.png">

O resultado do trecho acima será:

<img src="./readme_img/npm_run_test-only.png">

## Endpoints do Projeto

>*__Obs__*: As requisições foram feitas através do __Thunder Client__

#### GET /tasks
Este _endpoint_ é reponsável por trazer todas as tarefas existentes no banco de dados.

- _Headers_: este _endpoint_ não recebe _headers_;
- _Inputs_: este _endpoint_ não recebe dados;
- _Outputs_: este _endpoint_ retorna um objeto contendo o objeto "__tasks__" que é um array de objetos.

Imagem ilustrativa:

<img src="./readme_img/get_tasks.png">

#### POST /tasks
Este _endpoint_ é responsável por criar uma tarefa nova.

- _Headers_: este _endpoint_ não recebe _headers_;
- _Inputs_: este _endpoint_ recebe os seguintes dados:
```
"name":     String | Campo Obrigatório,
"deadline": String | Campo Obrigatório,
"status":   String | Campo Obrigatório,
"priority": String | Campo Obrigatório,
"finished": String
```
- _Outputs_: este _endpoint_ retorna um objeto contendo o objeto "__newTask__" que possui os dados fornecidos na criação da nova tarefa e seu __id_.

Imagem ilustrativa:

<img src="./readme_img/post_tasks.png">

#### PUT /tasks/:id
Este _endpoint_ é responsável por atualizar uma tarefa. Este endpoint usa o verbo PUT mas pode ser usado, também, como PATCH, atualizando apenas 1 campo sem necessitar a declaração de todos os campos.

- _Headers_: este _endpoint_ não recebe _headers_;
- _Inputs_: este _endpoint_ pode receber os seguintes dados:
```
"name":     String,
"deadline": String,
"status":   String,
"priority": String,
"finished": String
```
- _Outputs_: este _endpoint_ retorna um objeto contendo o objeto "__taskUpdated__" que possui o __id_ da tarefa e os campos atualizados.

Imagem ilustrativa:

<img src="readme_img/put_tasks-id.png">

#### DELETE /tasks/:id
Este _endpoint_ é reponsável por remover uma tarefa.

- _Headers_: este _endpoint_ não recebe _headers_;
- _Inputs_: este _endpoint_ não recebe dados;
- _Outputs_: este _endpoint_ não tem retorno além do status http.

Imagem ilustrativa:

<img src="readme_img/delete_tasks-id.png">

## Considerações Finais
Aqui eu encerro esta documentação. Espero que tenha ficado o mais claro, o mais nítido possível e que não tenha passado nenhuma etapa despercebida por mim.

Muito obrigado por ter conferido este projeto!! <br/>
Abraços!
