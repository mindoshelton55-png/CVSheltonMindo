# AuthStarter Pro

Template completo de autenticação moderna.

## Stack

Vite + JavaScript ES Modules + Firebase Authentication + CSS.

## Fluxos

- Home
- Login Email/Password
- Login Google
- Register
- Email verification
- Resend verification
- Forgot password
- Protected dashboard
- Logout
- Responsive UI

## Instalação

```bash
npm install
npm run dev
```

Crie `.env` a partir de `.env.example` e coloque a configuração da sua Web App Firebase.

No Firebase Console:
Authentication → Sign-in method:

- Email/Password
- Google

Authentication → Settings → Authorized domains:

- localhost
- domínio de produção, quando existir

## Build

```bash
npm run build
npm run preview
```

## Arquitetura

`config/` configura Firebase.
`services/` contém regras de autenticação.
`pages/` contém cada ecrã.
`components/` contém UI reutilizável.
`styles/` separa tokens, global, componentes e responsividade.
`router.js` controla as rotas hash.
`main.js` inicializa a aplicação.

## Segurança

O cliente Firebase não substitui Firebase Security Rules. Dados do Firestore/Storage devem ser protegidos por regras apropriadas no Firebase.
