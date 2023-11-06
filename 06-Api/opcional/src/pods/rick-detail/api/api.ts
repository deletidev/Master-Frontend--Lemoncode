import { gql } from 'graphql-request';
import { CharacterApi, GetCharacterResult } from './api.model';
import { graphQLClient } from '@/core/api';

const query = gql`
  query ($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      type
      origin {
        name
      }
      location {
        name
      }
      image
      created
    }
  }
`;

export const catchCharacterApi = async (id: string): Promise<CharacterApi> => {
  const response = await graphQLClient.request<GetCharacterResult>(query, {
    id,
  });

  return response.character;
};
