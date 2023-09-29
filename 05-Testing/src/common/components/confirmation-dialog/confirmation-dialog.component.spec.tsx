import React from 'react';
import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('./common/components/confirmation-dialog', () => {
  it('should be in the document if props isOpen is true', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: '',
      labels: {
        closeButton: '',
        acceptButton: '',
      },
      children: '',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const confirmationDialog = screen.getByRole('dialog');

    // Assert
    expect(confirmationDialog).toBeInTheDocument();
  });

  it('should not be in the document if props isOpen is false', () => {
    // Arrange
    const props = {
      isOpen: false,
      onAccept: () => {},
      onClose: () => {},
      title: '',
      labels: {
        closeButton: '',
        acceptButton: '',
      },
      children: '',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const confirmationDialog = screen.queryByRole('dialog');

    // Assert
    expect(confirmationDialog).not.toBeInTheDocument();
  });

  it('title should be in the document and have the same text as props.tittle', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: 'Hola',
      labels: {
        closeButton: '',
        acceptButton: '',
      },
      children: '',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const titleConfirmationDialog = screen.getByRole('heading', {
      level: 2,
      name: props.title,
    });

    // Assert
    expect(titleConfirmationDialog).toBeInTheDocument();
    expect(titleConfirmationDialog).toHaveTextContent('Hola');
  });

  it('should be two buttons in the document with the name based on props.label', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: 'Hola',
      labels: { closeButton: 'Close', acceptButton: 'Accept' },
      children: '',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const buttonsConfirmationDialog = screen.getAllByRole('button');

    const closeButton = screen.getByRole('button', {
      name: props.labels.closeButton,
    });
    const acceptButton = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });

    // Assert
    expect(buttonsConfirmationDialog).toHaveLength(2);
    expect(closeButton).toHaveTextContent('Close');
    expect(acceptButton).toHaveTextContent('Accept');
  });

  it('onAccep and OnClose should be called when accepting is clicked', async () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Confirmation Dialog',
      labels: { closeButton: 'Close', acceptButton: 'Accept' },
      children: null,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const acceptButton = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });
    await useEvent.click(acceptButton);

    // Assert
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });

  it('onClose should be called when close button is clicked, and OnAccept should not be called', async () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Confirmation Dialog',
      labels: { closeButton: 'Close', acceptButton: 'Accept' },
      children: null,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const closeButton = screen.getByRole('button', {
      name: props.labels.closeButton,
    });
    await useEvent.click(closeButton);

    // Assert
    expect(props.onAccept).not.toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });

  it('shoud renders children correctly', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Confirmation Dialog',
      labels: { closeButton: 'Close', acceptButton: 'Accept' },
      children: 'Child content',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const childElement = screen.getByText(props.children);

    // Assert
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent('Child content');
  });
});
