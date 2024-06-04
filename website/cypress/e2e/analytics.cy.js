/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
describe('tracking spec', () => {
  it('should display consent banner', () => {
    cy.visit('/');
    cy.get('[aria-label="Accept cookies"]').should('be.visible');
  });
  it('should set consent cookie on banner ack, hide it, and send analytics ping', () => {
    cy.visit('/');
    cy.intercept(/google-analytics\.com/g).as('analytics');
    cy.get('[aria-label="Accept cookies"]').click();
    cy.get('[aria-label="Accept cookies"]').should('not.exist');
    cy.getCookie('CookieConsent').should('exist');
    cy.wait('@analytics');
  });
  it('should send analytics ping on page re-load once cookie banner is accepted and not show it again', () => {
    cy.visit('/');
    cy.get('[aria-label="Accept cookies"]').should('exist');
    cy.get('[aria-label="Accept cookies"]').click();
    cy.intercept(/google-analytics\.com/g).as('analytics');
    cy.reload();
    cy.wait('@analytics');
  });
});
