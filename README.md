# Desafio da Empresa Stone.

Esse pequeno sistema foi criado com o objetivo de que as pessoas possam se cadastrar no mesmo, e criar com ele um controle quanto a seus personagens e quadrinhos favoritos da marvel. No mesmo será possível pesquisar personagens e quadrinhos diretamente da API pública da marvel, assim como os adicionar a uma listagem própria.

Para tal foram selecionadas as seguintes técnologias:

* [Javascript-React](https://pt-br.reactjs.org) Como uma das principais linguagens no ramo do frontend, JS traz uma grande performance, assim como bibliotecas e frameworks renomados e modernos, neste caso foi selecionado a biblioteca React com o objetivo de trazer seu dinamismo e modularidade ao projeto.

* [CSS - Bootstrap/Reactstrap](https://getbootstrap.com) Alinhando belas e dinâmicas interfaces, com uma programação ágil e agrádavel, o Bootstrap (e o componente Reactstrap) foram escolhidos para trazer uma identidade visual agradável e elegante ao design da pagina em questão.

* [Deploy - Heroku](heroku.com) Atualmente esse projeto se encontra para acesso na rede através do endereço abaixo:
 ```stone-sword.herokuapp.com```

Como foi utilizada a opção de conta de desenvolvimento por Hobby (gratuita), isso faz com que possa ter algumas limitações (até 20 acessos simultaneos, 600 Minutos de conexão por dia).

## Requisitos para rodar o projeto de forma Local:

Para rodar o projeto de forma local é necessário se possuir o node.js instalado na maquina.

Como demais dependências são tratadas diretamente através de requisições online (como via cdd para os arquivos referentes ao bootstrap e icones, e a api de backend que está hospedada no heroku), apenas a estrutura necessaria para se rodar uma aplicação react é necessária.

Para se baixar o arquivo diretamente do git pode se utilizar o comando abaixo:

 ``` git clone https://github.com/VitorinoAssuncao/stone_sword.git ```

GitHub CLI
 
 ``` gh repo clone VitorinoAssuncao/stone_sword ```

Ou simplesmente acessando  a pagina e selecionando a opção de preferencia para download.

### Instalando os requisitos:


Para se instalar os componentes necessários e iniciar a aplicação basta realizar o comando abaixo a partir de um terminal dentro do projeto baixado:

 ```npm start```

## Estruturas Relevantes:

Este projeto consiste em uma aplicação de Frontend, a qual em sua rota raiz permite que o usuário realize login ou escolha se cadastrar no sistema. O login é algo essencial, pois sem o mesmo nenhuma das outras paginas irá funcionar apropriadamente. 

Para o login estamos usando uma varíavel de sessão que armazenará o id do usuário, senso assim para realizar o logoff ou trocar de conta basta acessar novamente a pagina raiz e realizar o login com outra conta, ou fechar a pagina.

Internamente o sistema possui duas estruturas principais:

• user: Referente aos dados do usuário, como seus dados de cadastramento e listagem de personagens e quadrinhos favoritos (Respectivamente My-Characters e My-Comics).

• Marvel-...: Na estrutura de pesquisa de dados diretamente da marvel, é possível se localizar os personagens ou quadrinhos favoritos, além de adicionar os mesmos a suas listagens.


## EndPoints

Segue abaixo rotas principais liberadas atualmente no projeto:

``` "/" : A rota inicial de acesso, onde será possível se realizar login ou ir para a tela de cadastro```

```"/user": A rota onde são exibidos os dados do usuário após logado, irá ler a partir da varíavel de sessão salva e pesquisar na api de backend (stone-shield).```

```"/user/character": A rota responsável por trazer a listagem de personagens favoritados e exibir os mesmos em formato de cards.```

```"/characer/search": Rota responsável pela pesquisa diretamente dos dados da API da marvel, funcionando a partir da inicial do nome do personagem.```

```"/comic/search": Rota responsável pela pesquisa diretamente dos dados da API da marvel, funcionando a partir da inicial do nome do quadrinho.```