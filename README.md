# Projeto de Testes Automatizados com Cypress

Este repositório contém cenários de testes automatizados de **Login** (sucesso e falha) utilizando o framework **Cypress**.  
O objetivo é demonstrar na prática como a automação pode apoiar a área de Qualidade de Software, garantindo maior cobertura de testes e mais confiabilidade nas entregas.

## 🚀 Tecnologias utilizadas
- Cypress
- JavaScript
- Node.js e npm
- Git e GitHub

## 📂 Estrutura do projeto
- `cypress/e2e` → contém os arquivos de testes (ex: `spec.cy.js`)
- `cypress.config.js` → arquivo de configuração do Cypress
- `package.json` → dependências e scripts do projeto

## ▶️ Como executar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/deboraferreiras/cypress-do-zero.git
   cd cypress-do-zero
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o Cypress:
   ```bash
   npx cypress open
   ```

Isso abrirá a interface do Cypress, onde você poderá rodar os testes de login.

## ✅ Cenários implementados
- **Login com sucesso** → valida acesso à lista de compras.  
- **Login com falha** → valida mensagem de erro para credenciais inválidas.  

## 🔒 Observações
- A pasta `node_modules` não está versionada (conforme boas práticas).
- Artefatos como vídeos, screenshots e credenciais sensíveis também foram ignorados no repositório.
