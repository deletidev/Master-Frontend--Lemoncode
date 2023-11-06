import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id,
  name: character.name,
  image: character.image,
  status: character.status,
  bestSentences: character.bestSentences,
});

export const mapCharactersListFromApiToVm = (
  data: apiModel.CharacterEntityApi[]
): viewModel.CharacterEntityVm[] =>
  data.map((character) => mapCharacterFromApiToVm(character));
