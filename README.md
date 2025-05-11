# App Login com React Native CLI

Um aplicativo de login desenvolvido com React Native CLI, NativeBase, integração nativa com Swift/Kotlin, Zustand, e `json-server` para simulação de API.

## 🚀 Tecnologias

- React Native CLI
- NativeBase
- Zustand
- React Hook Form
- AsyncStorage
- json-server

## 📋 Pré-requisitos

Antes de iniciar, você precisa ter instalado:

- Node.js
- npm ou yarn
- Android Studio (com Android SDK) ou Xcode (para iOS)
- json-server (instalado globalmente)

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/vgabrielcastro/Auth-Native
cd auth-native
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Instale o json-server globalmente:

```bash
npm install -g json-server
```

ou

```bash
yarn global add json-server
```

## 📝 Configuração do IP

Se você estiver usando um dispositivo físico, é necessário configurar o IP correto no arquivo `services/api.ts`:

1. Descubra seu IP local:

   - Windows: `ipconfig` no terminal
   - Mac/Linux: `ifconfig` no terminal

2. Atualize o arquivo `services/api.ts` com seu IP:

```typescript
const api = axios.create({
  baseURL: 'http://SEU_IP_LOCAL:3000',
  timeout: 10000,
});
```

## ⚠️ Observações Importantes

1. Certifique-se que seu dispositivo móvel está na mesma rede Wi-Fi que seu computador
2. O json-server deve estar rodando antes de iniciar o aplicativo
3. Se estiver usando um dispositivo físico, verifique se o firewall não está bloqueando a porta 3000

## 🚀 Como executar

1. Primeiro, inicie o json-server em um terminal:

```bash
yarn api
```

2. Em outro terminal, inicie o Metro:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

3. Em outro terminal, Build and run seu app:

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

## 🔑 Credenciais de Teste

O sistema já vem com um usuário de teste configurado:

- Email: vini.teste@gmail.com
- Senha: 12345

## 📦 Banco de Dados

O arquivo `db.json` contém os dados simulados do banco de dados. Você pode adicionar mais usuários editando este arquivo:

```json
{
  "users": [
    {
      "id": 1,
      "name": "Vini Gabriel",
      "email": "vini.teste@gmail.com",
      "password": "12345"
    }
  ]
}
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
