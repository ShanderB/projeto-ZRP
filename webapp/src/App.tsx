import { useState } from 'react';
import { Request, Result } from './interfaces/Request';
import { connect } from 'react-redux';
import { toggleFavorite } from './state/actions/actions';
import { API } from './constants';
import Modal from 'react-modal';
import './App.css'
import axios from 'axios';
import Favorites from './components/favorites/Favorites';
import Results from './components/results/Results';
import Input from './components/input/Input';
import { useModal } from './components/favorites/Service';
import { usePokemonNameState } from './state/Service';
import Pagination from './components/pagination/Pagination';
import { useUrlState } from './components/pagination/Service';
import useFetchPokemon from './AppService';

Modal.setAppElement('#root');


function App({ favorites, toggleFavorite }) {
  const [result, setResult] = useState<Result[] | null>(null);

  const {
    pokemonName,
    setPokemonName,
  } = usePokemonNameState();

  const {
    nextUrl,
    setNextUrl,
    prevUrl,
    setPrevUrl,
  } = useUrlState();

  const {
    modalIsOpen,
    openModal,
    closeModal,
  } = useModal();


  const handleToggleFavorite = (pokemon: Result) => {
    toggleFavorite(pokemon);
  };

  const fetchData = (url: string) => {
    axios.get(url)
      .then(response => {
        const data: Request = response.data;
        setResult(data.results);
        setNextUrl(data.next ? API + new URL(data.next).search : null);
        setPrevUrl(data.previous ? API + new URL(data.previous).search : null);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const clearTable = () => {
    setResult([]);
    setNextUrl(null);
    setPrevUrl(null);
  }

  const fetchPokemon = useFetchPokemon(API, pokemonName, setResult, setNextUrl, setPrevUrl, clearTable);

  return (
    <div className="app-container">
      <button className="fetch-button" onClick={() => fetchData(API)} hidden={!!nextUrl || !!prevUrl}>Fetch All</button>

      <Favorites favorites={favorites} modalIsOpen={modalIsOpen} closeModal={closeModal} openModal={openModal} />

      <Input
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
        fetchPokemon={fetchPokemon}
        clearTable={clearTable}
        result={result}
      />

      <Results result={result} handleToggleFavorite={handleToggleFavorite} favorites={favorites} />

      <Pagination nextUrl={nextUrl} prevUrl={prevUrl} fetchData={fetchData} />
    </div>
  )
}

const mapStateToProps = (state: Result[]) => ({
  favorites: state,
});

const mapDispatchToProps = {
  toggleFavorite,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
