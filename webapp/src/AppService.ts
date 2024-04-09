import axios from 'axios';
import { Result } from './interfaces/Request';

const useFetchPokemon = (
  API: string,
  pokemonName: string,
  setResult: (result: Result[]) => void,
  setNextUrl: (url: string | null) => void,
  setPrevUrl: (url: string | null) => void,
  clearTable: () => void
) => {
  const fetchPokemon = () => {
    if (!pokemonName) {
      clearTable();
    } else {
      axios.get(`${API}/${pokemonName.toLowerCase()}`)
        .then(response => {
          const data: Result = response.data;
          setResult([data]);
          setNextUrl(null);
          setPrevUrl(null);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }

  return fetchPokemon;
};

export default useFetchPokemon;