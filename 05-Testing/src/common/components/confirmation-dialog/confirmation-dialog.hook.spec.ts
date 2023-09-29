import { act, renderHook } from '@testing-library/react';

import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from 'common/models';

describe('./common/components/confirmation-dialog/confirmation-dialog.hook', () => {
  it('should return an object: with isOpen and itemToDelete with default values, and  onAccept, onClose, and onOpenDialog with function when it calls it', () => {
    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toEqual(false);
    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });
  it('should update itemToDelete with a empty values, when it calls onAccept', () => {
    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });
  });

  it('should update isOpen with a false, when it calls onClose', () => {
    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toEqual(false);
  });

  it('should update isOpen with a true and itemToDelete with a item, when it calls onOpenDialog', () => {
    //Arrange
    const item: Lookup = {
      id: '1',
      name: 'Maria',
    };
    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
    });

    // Assert
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(item);
  });
});
