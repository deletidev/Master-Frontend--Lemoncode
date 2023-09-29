import React from 'react';
import { render, screen } from '@testing-library/react';

import { SpinnerComponent } from './spinner.component';
import * as tracker from 'react-promise-tracker/lib/trackerHook';

describe('./common/components/confirmation-dialog', () => {
  it('should be in the document if promiseInProgress is true', () => {
    // Arrange
    jest
      .spyOn(tracker, 'usePromiseTracker')
      .mockReturnValue({ promiseInProgress: true });

    // Act
    render(<SpinnerComponent />);

    const spinner = screen.getByTestId('spinner');

    // Assert
    expect(spinner).toBeInTheDocument();
  });

  it('should not be in the document if promiseInProgress is false', () => {
    // Arrange
    jest
      .spyOn(tracker, 'usePromiseTracker')
      .mockReturnValue({ promiseInProgress: false });

    // Act
    render(<SpinnerComponent />);

    const spinner = screen.queryByTestId('spinner');

    // Assert
    expect(spinner).not.toBeInTheDocument();
  });
});
