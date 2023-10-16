import { Employee } from '../../src/pods/employee-list/api/employee-list.api-model';
import * as api from '../../src/pods/employee-list/api';
describe('Employee-list specs', () => {
  it('visit the Employee-list page', () => {
    cy.visit('/employees');
  });

  it('should fetch employee list and show it in screen when visit /employees url', () => {
    //Arrange

    //Act
    cy.visit('/employees');

    //Assert
    cy.findAllByTestId('row-body').should('have.length.greaterThan', 0);
  });

  it('should navigate to first employee when click on edit first employee', () => {
    // Act
    cy.visit('/employees');
    cy.findAllByRole('button', { name: 'Edit employee' }).then((buttons) => {
      buttons[0].click();
    });

    // Assert
    cy.url().should('equal', 'http://localhost:8080/#/employees/1');
  });

  it('should show a dialog with a message when click on delete employee', () => {
    //Arrange

    //Act
    cy.visit('/employees');
    cy.findAllByRole('button', { name: 'Delete employee' }).then((buttons) => {
      buttons[0].click();
    });

    //Assert
    cy.findByRole('dialog');
    cy.findAllByRole('button', { name: 'Cancelar' }).click();
    cy.findByRole('dialog').should('not.exist');
  });

  it('should navigate to first employee when click on edit first employee', () => {
    // Act
    cy.visit('/employees');
    cy.findAllByRole('button', { name: 'Nuevo empleado' }).click();

    // Assert
    cy.url().should('equal', 'http://localhost:8080/#/employees/0');
  });

  it('should search input has the focus when it clicks on it', () => {
    //Arrange

    //Act
    cy.visit('/employees');
    cy.findByPlaceholderText('Buscar empleado').click();

    //Assert
    cy.findByPlaceholderText('Buscar empleado').should('have.focus');
  });

  it('should search input has the value when it type on it', () => {
    //Arrange
    const search = 'd';
    //Act
    cy.visit('/employees');
    cy.findByPlaceholderText('Buscar empleado').type(search);

    //Assert
    cy.findByPlaceholderText('Buscar empleado').should('have.value', search);
    cy.findAllByTestId('row-body').should('have.length', 2);
  });
});
