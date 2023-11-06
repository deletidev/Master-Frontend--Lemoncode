import { gql } from 'graphql-request';
import { DataApiCharacters, GetCharactersResponse } from './api.model';
import { graphQLClient } from '@/core/api';

const query = gql`
  query ($page: Int, $value: String) {
    characters(page: $page, filter: { name: $value }) {
      info {
        pages
      }
      results {
        id
        image
        name
        status
      }
    }
  }
`;

export const catchCharactersListApi = async (
  value: string,
  page: number
): Promise<DataApiCharacters> => {
  const response = await graphQLClient.request<GetCharactersResponse>(query, {
    page,
    value,
  });

  return response.characters;
};
