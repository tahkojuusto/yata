describe('App', function() {
  describe('when signing in', function() {
    it('signing works', function() {
      cy.visit('http://localhost:3000');
      cy.contains('Sign in to your account');

      cy.get('[name="username"]').type('julius-test2');
      cy.get('[name="password"]').type('AUTOJAautoja');
      cy.get('button').click();
      cy.contains('Hello julius-test2');

      cy.get('[data-test="sign-out-button"]').click();
      cy.contains('Sign in to your account');
    });
  });

  describe('when signed in', function() {
    beforeEach(function() {
      cy.visit('http://localhost:3000');
      cy.contains('Sign in to your account');

      cy.get('[name="username"]').type('julius-test2');
      cy.get('[name="password"]').type('AUTOJAautoja');
      cy.get('button').click();
    });

    it('adding and removing task works', function() {
      cy.get('[placeholder="Add todo item here"]').type('Buy bananas');
      cy.get('[type="submit"]').click();
      cy.contains('Buy bananas');

      cy.get('a').click();
      cy.contains('Buy bananas').should('not.exist');
    });
  });
});
