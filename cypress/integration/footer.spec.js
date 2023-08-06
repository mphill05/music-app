describe('Footer', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays error message when email is not entered', () => {
    cy.get('button').contains('Submit').click();
    cy.contains('Please enter your email').should('be.visible');
  });

  it('clears error message when email is entered', () => {
    cy.get('button').contains('Submit').click();
    cy.get('input').type('test@example.com');
    cy.contains('Please enter your email').should('not exist');
  })
});