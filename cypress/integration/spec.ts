describe('Check Reddit App', () => {
  it('Visits the initial project page and redirect', () => {
    cy.visit('/');
    cy.contains('Reddit Reader App');
  });

  it('Visits Reddit Feed Page Test', () => {
    cy.visit('/reader');
    cy.contains('Reddit Reader App');
  });

  it('Check navigation buttons', () => {
    cy.get('app-list').should('exist');
    cy.get('.post').its('length').should('be.gte', 25);

    cy.get('nav').should('exist');
    cy.get('.button-next').click();

    cy.get('.post').its('length').should('be.gte', 25);

    cy.get('.button-prev').click();

    cy.get('.post').its('length').should('be.gte', 0);

    cy.intercept('https://www.reddit.com/r/sweden.json?limit=5&raw_json=1').as('load-posts');
    cy.get('.limit').select('5');
    cy.wait('@load-posts');
    cy.get('.post').its('length').should('be.lte', 10);
  });
});
