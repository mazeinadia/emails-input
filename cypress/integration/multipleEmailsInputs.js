describe('Multiple Emails Inputs', () => {
  before(() => {
    cy.visit('/multiple')
  });

  it('add only to one Emails Input', () => {
    const stub = cy.stub();
    cy.on ('window:alert', stub);

    cy.get('[data-cy=container-1]').contains('Add email').click();
    cy.get('[data-cy=container-1]').find('[data-cy=input]').type('valid@email.com,');

    cy.get('[data-cy=container-1]').should('contain', 'valid@email.com');
    cy.get('[data-cy=container-1]').find('[data-cy=get-valid]').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Valid emails count: 2')
    });

    cy.get('[data-cy=container-2]').should('not.contain', 'valid@email.com');
    cy.get('[data-cy=container-2]').find('[data-cy=get-valid]').click().then(() => {
      expect(stub.getCall(1)).to.be.calledWith('Valid emails count: 0')
    });
  });


  it('remove only from one Emails Input', () => {
    const stub = cy.stub();
    cy.on ('window:alert', stub);

    cy.get('[data-cy=container-1]').find('[data-cy=input]').type('second-valid@email.com,');
    cy.get('[data-cy=container-2]').find('[data-cy=input]').type('second-valid@email.com,');

    cy.get('[data-cy=container-1]').find('[data-cy=input-container]').should('contain', 'second-valid@email.com');
    cy.get('[data-cy=container-1]').find('[data-cy=get-valid]').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Valid emails count: 3')
    });

    cy.get('[data-cy=container-2]').find('[data-cy=input-container]').should('contain', 'second-valid@email.com');
    cy.get('[data-cy=container-2]').find('[data-cy=get-valid]').click().then(() => {
      expect(stub.getCall(1)).to.be.calledWith('Valid emails count: 1')
    });

    cy.get('[data-cy=container-2]').find('[data-cy=delete-email]').click();
    cy.get('[data-cy=container-2]').find('[data-cy=get-valid]').click().then(() => {
      expect(stub.getCall(2)).to.be.calledWith('Valid emails count: 0')
    });

  });
});

