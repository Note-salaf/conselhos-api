📘 Advice Generator

Aplicação web simples que consome a API pública Advice Slip JSON API para exibir conselhos aleatórios na tela ao clicar em um botão.

Demo: https://note-salaf.github.io/conselhos-api/

O projeto foi desenvolvido utilizando HTML, CSS e JavaScript puro, com foco em:
Modularização de código
Uso de funções puras quando possível
Manipulação moderna do DOM (createElement)
Separação de responsabilidades
Organização de pastas

🎯 Objetivo do Projeto

Refatorar uma versão inicial simples (HTML + JS único arquivo) para uma estrutura mais profissional, aplicando boas práticas de desenvolvimento frontend.

🚀 Funcionalidades

Buscar um conselho aleatório da API
Exibir o conselho na tela
Atualizar o conselho ao clicar no botão
Tratar erros de requisição
Interface simples e responsiva

🧠 Conceitos Aplicados

ES Modules (import / export)
Funções puras
Manipulação do DOM com createElement
Separação entre:
lógica de API
lógica de interface
arquivo principal (orquestração)
Controle de erro com try/catch
Uso de async/await

```
📂 Estrutura de Pastas
advice-generator/
│
├── index.html
├── css/
│   └── style.css
├── images/
│   |── fundo-suave.png
│   |── inspiracao-layout.png
├── js/
│   ├── main.js
│   ├── api.js
│   ├── ui.js
│   └── utils.js (opcional)
└── README.md
🔌 API Utilizada
```

Endpoint:

https://api.adviceslip.com/advice

Resposta esperada:

{
  "slip": {
    "id": 123,
    "advice": "Your advice text here."
  }
}

🛠 Decisões Técnicas
❌ Não será usado:
Frameworks
Bibliotecas externas
LocalStorage

✅ Será usado:

JavaScript moderno
type="module"
CSS separado

📌 Próximas Melhorias Futuras

Loading indicator
Animação ao trocar conselho
Modo escuro
Copiar conselho para clipboard

Internacionalização
