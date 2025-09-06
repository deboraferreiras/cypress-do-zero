describe('Testes de Login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('debyss16@gmail.com')
    cy.get('[data-testid="senha"]').type('01169855')
    cy.get('[data-testid="entrar"]').click()
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('h1').contains('Lista de Compras')
  })

it('Login com falha', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('debyss16@gmail.com')
    cy.get('[data-testid="senha"]').type('0110')
    cy.get('[data-testid="entrar"]').click()
   cy.get('.alert > :nth-child(2)').contains('Email e/ou senha inválidos')
})
})