import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
// import { mockCharacterCollection } from './character-collection.mock-data';

// let CharacterCollection = [...mockCharacterCollection];
const url = 'api/characters';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const result = await axios.get(url).then((r) => r);

  return result.data;
};
