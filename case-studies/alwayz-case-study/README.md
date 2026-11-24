# Alwayz

Base da Fase 1 da plataforma de streaming Alwayz, construída com Flutter, Dart e Firebase.

## Pré-requisitos

1. Instalar o Flutter SDK e adicionar `flutter/bin` ao PATH.
2. Instalar o Firebase CLI.
3. Ter acesso a um projeto Firebase.

Verificar a instalação:

```powershell
flutter doctor
flutter --version
firebase --version
```

## Criar a estrutura Flutter

Como este workspace foi preparado sem o SDK instalado, execute na raiz do projeto:

```powershell
cd "c:\Users\X1 CARBON\OneDrive\Documents\Flutter Dart\Alwayz"
flutter create . --project-name alwayz
flutter pub get
```

O comando `flutter create .` gera as pastas nativas Android, iOS, Web, Windows, macOS e Linux sem substituir a arquitetura em `lib/`.

## Configurar Firebase

```powershell
firebase login
dart pub global activate flutterfire_cli
flutterfire configure
```

No assistente, selecione o projeto Firebase e as plataformas que a equipa vai suportar. O comando substitui `lib/firebase_options.dart` pelos valores reais. Não introduza chaves manualmente no código.

No Firebase Console:

1. Em Authentication > Sign-in method, ative Email/Password.
2. Crie a base em Firestore Database.
3. Ative Storage e configure as regras antes de publicar.

Depois execute:

```powershell
flutter pub get
flutter analyze
flutter run
```

## Estrutura

```text
lib/
  main.dart                         # Inicialização Flutter e Firebase
  firebase_options.dart             # Gerado pelo FlutterFire CLI
  core/
    theme/app_theme.dart            # Tema dark/premium
    constants/app_constants.dart    # Constantes globais
    utils/                          # Utilitários partilhados
  models/
    app_user.dart
    content_model.dart
    category_model.dart
  services/
    auth_service.dart               # Firebase Authentication
    firebase_service.dart           # Firestore e Storage
  repositories/                     # Acesso a dados por domínio
  providers/
    auth_provider.dart              # Estado de autenticação
  pages/
    firebase_check_page.dart        # Ecrã de verificação da Fase 1
  widgets/                          # Widgets reutilizáveis
  admin/                            # Reservado para fase futura
```

## O que está incluído

- Tema base dark/premium.
- Inicialização assíncrona do Firebase.
- `AuthService` com registo, login, logout, utilizador atual e `authStateChanges`.
- `AuthProvider` com `ChangeNotifier` e Provider.
- Modelos `AppUser`, `ContentModel` e `CategoryModel`.
- Dependências de Firebase Authentication, Cloud Firestore e Firebase Storage.
- Ecrã mínimo que confirma a inicialização ou mostra a configuração pendente.

Catálogo, player, HLS, painel administrativo e pagamentos ficam deliberadamente fora desta fase.

## Checklist da Fase 1

- [ ] `flutter doctor` sem problemas bloqueantes.
- [ ] Projeto criado com o nome `alwayz`.
- [ ] `flutterfire configure` executado para o projeto Firebase correto.
- [ ] `firebase_options.dart` contém valores gerados, sem `REPLACE_WITH_`.
- [ ] Email/Password ativado no Firebase Authentication.
- [ ] Firestore criado.
- [ ] Firebase Storage ativado e regras revistas.
- [ ] `flutter pub get` concluído.
- [ ] `flutter analyze` sem erros.
- [ ] `flutter run` abre o ecrã Alwayz.
- [ ] O ecrã mostra “Firebase inicializado com sucesso.”.
