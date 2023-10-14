describe('Login specs', () => {
  it('visit the login page', () => {
    cy.visit('/');
  });

  it('should user input has the focus when it clicks on it', () => {
    //Arrange

    //Act
    cy.visit('/');
    cy.get(`input[name="user"]`).click();

    //Assert
    cy.get(`input[name="user"]`).should('have.focus');
  });

  it('should password input has the focus when it clicks on it', () => {
    //Arrange

    //Act
    cy.visit('/');
    cy.get(`input[name="password"]`).click();

    //Assert
    cy.get(`input[name="password"]`).should('have.focus');
  });

  it('should show an snackbar with a message when type invalid credentials', () => {
    //Arrange
    const user = 'admin';
    const password = '1234';

    //Act
    cy.visit('/');
    cy.findByRole('textbox').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    //Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
    cy.findByRole('alert').should(
      'have.text',
      'Usuario y/o password no válidos'
    );
  });

  it('should navigate to hotels url when type valid credentials', () => {
    //Arrange
    const user = 'admin';
    const password = 'test';

    //Act
    cy.visit('/');
    cy.findByRole('textbox').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    //Assert
    cy.url().should('equal', 'http://localhost:8080/#/submodule-list');
  });
});
