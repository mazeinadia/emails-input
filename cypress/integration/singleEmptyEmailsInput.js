describe('Single not initialized Emails Input', () => {
  before(() => {
    cy.visit('/empty')
  });

  it('render empty Emails Input in container', () => {
    cy.get('[data-cy=container]')
      .should('contain', 'Share Board name with others')
      .should('contain', 'Add email')
      .should('contain', 'Get emails count');
  });

  it('alert 0 valid emails in empty Emails Input', () => {
    const stub = cy.stub();
    cy.on ('window:alert', stub);

    cy.get('[data-cy=get-valid]').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Valid emails count: 0')
    })
  });

  it('alert 1 valid emails in empty Emails Input after "Add email" click', () => {
    const stub = cy.stub();
    cy.on ('window:alert', stub);

    cy.get('[data-cy=add-email]').click();
    cy.get('[data-cy=get-valid]').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Valid emails count: 1')
    })
  });

  it('alert 0 valid emails after deleting single email', () => {
    const stub = cy.stub();
    cy.on ('window:alert', stub);

    cy.get('[data-cy=delete-email]').click();
    cy.get('[data-cy=get-valid]').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Valid emails count: 0')
    })
  });

  it('add email with comma, on blur, on Enter', () => {
    const stub = cy.stub();
    cy.on ('window:alert', stub);

    cy.get('[data-cy=input]').type('invalid-email@{enter}');
    cy.get('[data-cy=input-container]').should('contain', 'invalid-email@');

    cy.get('[data-cy=input]').type('valid@email.com,');
    cy.get('[data-cy=input-container]').should('contain', 'valid@email.com');

    cy.get('[data-cy=input-container]').should('not.contain', 'valid@email.com,');
    cy.get('[data-cy=input]').type('second-valid@email.com').blur();

    cy.get('[data-cy=get-valid]').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Valid emails count: 2')
    })
  });
});

