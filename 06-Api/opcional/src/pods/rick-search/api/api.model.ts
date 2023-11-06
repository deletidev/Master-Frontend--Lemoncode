export interface CharactersApi {
  id: number;
  name: string;
  status: string;
  image: string;
}

export interface InfoDataCharacters {
  pages: number;
}

export interface DataApiCharacters {
  info: InfoDataCharacters;
  results: CharactersApi[];
}
export interface GetCharactersResponse {
  characters: DataApiCharacters;
}
