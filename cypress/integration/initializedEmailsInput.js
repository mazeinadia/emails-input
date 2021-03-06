describe('Initialized Emails Input', () => {
  before(() => {
    cy.visit('/')
  });

  it('render Emails Input with value', () => {
    const stub = cy.stub();
    cy.on ('window:alert', stub);

    cy.get('[data-cy=container]')
      .should('contain', 'john@miro.com')
      .should('contain', 'invalid.email')
      .should('contain', 'mike@miro.com')
      .should('contain', 'alexander@miro.com');

    cy.get('[data-cy=get-valid]').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Valid emails count: 3')
    })
  });

  it('delete initial emails from Emails Input and invoke callback', () => {
    cy.window().then((win) => {
      const spy = cy.spy(win.console, 'log').as('consoleLog');
      const withRestValue = spy.withArgs('Rest values: 3').as('consoleLogWithRestValue');

      cy.get('[data-cy=container]').find('[data-email-id=1]').click()
        .then(() => {
          expect(withRestValue).to.be.called;
        });
    });
  });
});

