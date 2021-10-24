<h1 align="center">CRUD - REACTJS + FIREBASE</h1>
<img src="https://ik.imagekit.io/gczsuhmv3/avanz/crud.svg?updatedAt=1634693233745" alt="screenshot">

## 💻 Projeto

Uma aplicação simples que faz cadastro de clientes. A principal abordagem é o conceito de [CRUD](https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD) as 4 operações básicas de armazenamento persistente.

## 🚀 Tecnologias

- [ReactJS]()
- [Typescript]()
- [Firebase]()

## 🤩 Detalhes do desenvolvimento do projeto

### Como criar meu projeto usando firebase?

Não é muito difícil criar um projeto usando o firebase, você pode dá uma olhada na pópria [documentação](https://firebase.google.com/?hl=pt-br) para entender melhor. Mas se você não está acostumado a fazer isso vou te explicar:

- **Passo 1**: Quando você acessar o site do firebase, escolha a opção **ir para o console**.
- **Passo 2**: Depois disso clique em **adicionar projeto** e dê um nome para o mesmo.
- **Passo 3**: Feito isso você pode desabilitar o google analytics (não nos interessa). Depois clique em **criar projeto** e pronto.
- **Passo 4**: Comece adicionando o Firebase ao seu aplicativo, **selecione a opção web**.
- **Passo 5**: Dê um apelido para seu app e clique em **registrar app**.
- **Passo 6**: Agora a parte mais importante, o firebase vai criar algumas credenciais com as informações do seu projeto, peço que você guarde essas informações em algum arquivo temporário, mais tarde vamos precisar delas. Feito isso clique em **continuar no console**.

Beleza temos nosso projeto criado, precisamos fazer com que ele se conecte com a nossa aplicação React. Para fazer isso abrimos nossa pasta do projeto no vscode e em uma aba do terminal rodamos o seguinte comando: `yarn add firebase ou npm install firebase`

Agora vamos criar uma **pasta chamada services** e dentro dela um **arquivo firebase.ts**. Nesse arquivo você pode adicionar as suas credenciais que foram realizados no nossso passo 6. Vou te mostar um exemplo de como fica essa configuaração

```js
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
export { firebase, database };
```

Depois é só chamar esse arquivo no nosso App.tsx, te indico depois te ter iniciado a sua aplicação olhar o console do navegador, pois ele pode nos mostrar algum erro que pode ter acontecido com essa conexão.

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./services/firebase";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

<!--
### Vou trazer alguns trechos de códigos para que você entender como realizar as 4 operações de um CRUD.

- READ

Essa é a operação que ler uma base de dados, e para fazer isso usamos o **hook useEffect** para que quando o nosso componente seja montado em tela, executamos nossa função para acessar o nosso realtime database do firebase e listar nossos dados. Segui um exemplo de como fazer isso:

```js
  useEffect(() => {
    database
      .ref()
      .child("users")
      .on("value", data => {
        const datas = data.val();

        if (datas) {
          const formatDatas = Object.entries(datas).map(([id, value]) => ({
            id,
            ...(value as any)
          }));

          if (data.val() != null) {
            setUsers([...users, ...formatDatas]);
          }
        }
      });
  }, []);
```
Indico criar um state no seu component para guardar todas essas informações. Explicando o que está acontecendo nesse código.
-->
