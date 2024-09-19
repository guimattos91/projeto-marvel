# Marvel Website

Marvel's Project é um site que fornece uma listagem completa de personagens e quadrinhos do universo Marvel. Ele permite que os fãs da Marvel busquem e explorem informações detalhadas sobre seus personagens e quadrinhos favoritos, tornando-se uma ferramenta útil tanto para fãs casuais quanto para colecionadores.


# Veja o Projeto Rodando:
[Marvel's Project](https://marvel.guimattos.dev/)


## Objetivo do Projeto

O principal objetivo deste projeto é fornecer uma plataforma onde os usuários possam encontrar informações sobre personagens e quadrinhos da Marvel. Ele serve como um guia abrangente para os fãs da Marvel, facilitando a busca e a descoberta de detalhes sobre o vasto universo Marvel.

## Funcionalidades

- **Listagem de Personagens:** Veja uma lista detalhada dos personagens da Marvel.
- **Busca de Personagens:** Pesquise por personagens específicos pelo nome.
- **Listagem de Quadrinhos:** Explore uma coleção completa de quadrinhos da Marvel.
- **Busca de Quadrinhos:** Encontre quadrinhos específicos usando a barra de pesquisa.

## Pré-requisitos

Para executar este projeto, você precisará ter os seguintes itens configurados:

### Acesse a API da Marvel com esse passo a passo:
- Crie uma Conta na Marvel Developer
- Acesse o site da Marvel Developer: [Marvel Developer](https://developer.marvel.com/)
- Clique em "Sign Up" no canto superior direito.
- Preencha o formulário de registro com suas informações e crie uma conta.

### Obtenha suas Chaves de API:
Após se registrar e fazer login, acesse a seção "My Developer Account" na barra de navegação superior.
Lá, você verá as suas chaves de API: uma Public Key (Chave Pública) e uma Private Key (Chave Privada).
Anote essas chaves, pois você precisará delas para fazer solicitações à API.
Leia a Documentação da API:

### Acesse a documentação da API da Marvel.
Leia sobre os diferentes endpoints disponíveis, como /characters, /comics, /events, etc. A documentação também fornecerá detalhes sobre como construir URLs de solicitação e quais parâmetros são necessários.


- **Use o arquivo `.env` e configure as Variáveis de Ambiente em Seu Projeto**
- Instale as extensões ESLint e EditorConfig para o VS Code.
- **Não instale a extensão Prettier.**
- Uso de Node.js v16

Adicione as seguintes configurações ao arquivo de configurações do VS Code:

```json
"[javascript]": {
    "editor.defaultFormatter": null
},
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
},
"editor.formatOnSave": false,
"eslint.codeActionsOnSave.mode": "all",
"eslint.packageManager": "yarn",
"eslint.validate": [
    "javascript",
    "javascriptreact"
]
```

## Instalação e Configuração
Para configurar o projeto em seu ambiente local, siga estas etapas:

Clone o repositório:
```
git clone <URL_DO_REPOSITORIO>
```

Copie o arquivo de exemplo .env e configure suas variáveis de ambiente:
```
cp .env.example .env
```

Instale as dependências:

```
yarn
```

Execute o projeto em modo de desenvolvimento:

```
yarn dev
```

## Como Usar
Após a instalação e configuração, você pode acessar o site localmente para explorar suas funcionalidades. O site permite que você navegue por uma lista de personagens e quadrinhos, e use a barra de pesquisa para encontrar informações específicas

## Testes
Para executar os testes, utilize o seguinte comando:
```
yarn test
```




## Credits
Este projeto foi feito a partir do template de: [https://github.com/fredsvanelli/vite-react-ts-eslint-prettier-editorconfig](https://github.com/fredsvanelli/vite-react-ts-eslint-prettier-editorconfig)
