import axios from 'axios';
import { Result } from './interfaces/Request';

const useFetchPokemon = (
  API: string,
  pokemonName: string,
  setResult: (result: Result[]) => void,
  setNextUrl: (url: string | null) => void,
  setPrevUrl: (url: string | null) => void,
  clearTable: () => void,
  setErrorMessage: (message: string | null) => void,
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
          setErrorMessage(null);
        })
        .catch(error => {
          if(error.response.status === 500 || error.response.status === 404){
            setErrorMessage('Pokemon not found');
            return;
          }
          console.error('Error:', error);
        });
    }
  }

  return fetchPokemon;
};



/* const fetchData = (
  url: string,
  setResult: (result: Result[]) => void,
  setNextUrl: (url: string | null) => void,
  setPrevUrl: (url: string | null) => void,
) => {
  axios.get(url)
    .then(response => {
      const data: Request = response.data;
      setResult(data.results);
      setNextUrl(data.next ? API + new URL(data.next).search : null);
      setPrevUrl(data.previous ? API + new URL(data.previous).search : null);
    })
    .catch(error => {
      if (error.response.status === 500 || error.response.status === 404) {
        return;
      }

      console.error('Error:', error);
    });
} */

export default useFetchPokemon;