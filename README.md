# 🧠 Angular BuzzFeed Quiz

Um projeto interativo de quizzes estilo BuzzFeed, construído com Angular e altamente customizável. Este repositório é um fork estendido e aprimorado de [`felipeAguiarCode/angular-buzzfeed-quizz-clone`](https://github.com/felipeAguiarCode/angular-buzzfeed-quizz-clone), com novas funcionalidades, estrutura modularizada e foco em reusabilidade, escalabilidade e dados dinâmicos.

---

## ✨ O que este projeto tem a mais?

Comparado ao repositório base, este projeto implementa:

### ✅ 1. Suporte a múltiplos quizzes
- Exibição e navegação entre **vários quizzes distintos**.
- Cada quiz com título, perguntas e múltiplos resultados personalizados.

### ✅ 2. Resultados finais com múltiplas variações
- Suporte para 2, 3 ou 4 resultados diferentes por quiz.
- Definição dinâmica via `alias` nas opções de resposta.

### ✅ 3. Dados mockados via JSON externo
- Estrutura separada entre lógica e conteúdo.
- Facilidade para expandir ou integrar com APIs reais.

### ✅ 4. Componentização aprimorada
- Separação de responsabilidades entre `QuestionComponent`, `OptionComponent`, `ResultComponent`, entre outros.
- Melhor organização e reuso.

### ✅ 5. Modularização de estilos
- SCSS organizado por componente.
- Layout limpo e responsivo

---

## 🚀 Tecnologias Utilizadas

- Angular 14+
- TypeScript
- CSS
- JSON mock data
- Angular Router

---

## ✅ Funcionalidades

- Seleção de quiz por ID
- Perguntas com múltiplas opções de resposta
- Contabilização de escolhas por alias
- Resultado calculado dinamicamente
- Exibição clara e estilizada do resultado

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/         → Componentes reativos e reutilizáveis
│   ├── pages/              → Páginas como QuizPage e ResultPage
│   ├── models/             → Interfaces tipadas (Quiz, Question, Option)
│   └── services/           → Serviço para carregar quiz mockado
├── assets/                 → JSON com dados de quiz
└── environments/           → Configurações por ambiente
```

---

## ▶️ Como rodar localmente

```bash
git clone https://github.com/fellipedoprado/angular-buzzfeed-quiz.git
cd angular-buzzfeed-quiz
npm install
ng serve
```

Acesse em: [http://localhost:4200](http://localhost:4200)

---

## 🔮 Próximos passos

- Adicionar sistema de pontuação por pergunta
- Criar um ranking de resultados ou feedback personalizado
- Criar animações de transição entre perguntas/resultados
- Permitir compartilhamento do resultado (social share)
- Adicionar suporte a imagens e vídeos nas opções
- Criar painel de administração para criar e editar quizzes

---

## 📄 Licença

MIT © [Fellipe do Prado Arruda](https://github.com/fellipedoprado)
