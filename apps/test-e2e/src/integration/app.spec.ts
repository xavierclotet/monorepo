import { getGreeting } from '../support/app.po';

describe('test', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.contains('xavitest-mylib');
  });

  it('should displayinfo message', () => {
    cy.get('#search-button').click();

    cy.contains('Informational Notes');
  });
});
