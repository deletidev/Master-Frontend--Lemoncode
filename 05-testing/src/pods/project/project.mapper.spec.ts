import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('./pods/project', () => {
  it('should return empty array when feeding undefined project', () => {
    // Arrange
    const project = undefined;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual({
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: []
    });
  });

  it('should return empty array when feeding null project', () => {
    // Arrange
    const project = null;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual({
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: []
    });
  });

  it('should return one objet with values when passing one objet with values', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'Nombre',
      isActive: true,
      comments: 'Comentario',
      externalId: '1234',
      employees: [
        {
          id: '1',
          employeeName: 'Daniel Perez',
          isAssigned: true
        },
        {
          id: '2',
          employeeName: 'Jose Sanchez',
          isAssigned: false
        }
      ]
    };

    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'Nombre',
      isActive: true,
      comments: 'Comentario',
      externalId: '1234',
      employees: [
        {
          id: '1',
          employeeName: 'Daniel Perez',
          isAssigned: true
        },
        {
          id: '2',
          employeeName: 'Jose Sanchez',
          isAssigned: false
        }
      ]
    };
    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
