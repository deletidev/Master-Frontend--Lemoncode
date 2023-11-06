import axios, { Axios } from 'axios';
import { Character } from './character.api-model';
import { mockCharacter } from './character.mock-data';

const url = 'api/characters';

export const getCharacter = async (id: string): Promise<Character> => {
  //Con fetch
  // const result = await fetch(`${url}/${id}`);
  // if (result.ok) {
  //   return await result.json();
  // } else {
  //   throw Error(result.statusText);
  // }

  const { data } = await axios.get<Character>(`${url}/${id}`);
  return data;
};

export const saveCharacter = async (character: Character): Promise<Boolean> => {
  if (character.id) {
    //Con fetch
    // const { statusText } = await fetch(`${url}/${character.id}`, {
    //   method: 'PATCH',
    //   body: JSON.stringify(character),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    const { statusText } = await axios.patch(
      `${url}/${character.id}`,
      character
    );
    return statusText === 'OK';
  } else {
    throw Error('Imposible acceder al personaje');
  }
};
