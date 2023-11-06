export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentences: string;
}

export interface InfoDataCharacters {
  count: number;
  next: string;
  pages: number;
  prev: string;
}

export interface DataApiCharacters {
  info: InfoDataCharacters;
  results: CharacterEntityApi[];
}
