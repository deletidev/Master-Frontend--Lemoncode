import React from 'react';
import { useSearchReducer } from './rick-search.reducer';
import { catchCharactersListApi } from './api/api';
import { mapCharactersListFromApiToVm } from './rick-search.mapper';
import { useSearchCharacterContext } from '@/core';

export const useCharacterPage = () => {
  const { searchCharacter } = useSearchCharacterContext();

  const [searchState, dispatch] = React.useReducer(useSearchReducer, {
    charactersList: [],
    page: searchCharacter.searchPage,
    totalPages: 1,
    value: searchCharacter.searchCharacter,
    error: ''
  });

  const updateCharactersPage = (page: number) => {
    catchCharactersListApi(searchState.value, page).then(data => {
      //graphql no me da errores me devulve un array vacio para dar mensaje esta el if
      if (data.results.length === 0) {
        dispatch({
          type: 'setError',
          payload: 'No hay resultados'
        });
      }
      dispatch({
        type: 'setCharactersList',
        payload: mapCharactersListFromApiToVm(data.results)
      });
      dispatch({
        type: 'setTotalPages',
        payload: data.info.pages
      });
    });
  };

  return { searchState, dispatch, updateCharactersPage };
};
