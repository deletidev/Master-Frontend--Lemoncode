import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: character.id,
  name: character.name,
  status: character.status,
  image: character.image,
  bestSentences: character.bestSentences,
});

export const mapChracterFromVmToApi = (
  character: viewModel.Character
): apiModel.Character =>
  ({
    id: character.id,
    name: character.name,
    status: character.status,
    image: character.image,
    bestSentences: character.bestSentences,
  } as unknown as apiModel.Character);
