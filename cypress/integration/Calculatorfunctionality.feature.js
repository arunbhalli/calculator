describe('User can calculate using two numbers', () => {
  beforeEach(() => {
    cy.get('/');
  });
  it('is expected to add two numbers', () => {
    cy.get('[data-cy=title]').should('contain','Adding Two Numbers')
    cy.get('[data-cy=num1]').type('1')
    cy.get('[data-cy=num2').type('2')
    cy.get('[data-cy=add-button]').click();
    cy.get('[data-cy=result]').should('contain', '3')
  });
});
