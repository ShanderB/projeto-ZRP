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

Modal.setAppElement('#root');


function App({ favorites, toggleFavorite }) {
  const [result, setResult] = useState<Result[] | null>(null);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [prevUrl, setPrevUrl] = useState<string | null>(null);
  const [pokemonName, setPokemonName] = useState('');

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

  const fetchPokemon = () => {
    if (!pokemonName) {
      clearTable();
    } else {
      axios.get(`${API}/${pokemonName}`)
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

  return (
    <div className="app-container">
      <Input
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
        fetchPokemon={fetchPokemon}
        clearTable={clearTable}
        result={result}
      />

      <Results result={result} handleToggleFavorite={handleToggleFavorite} favorites={favorites} />

      <Favorites favorites={favorites} modalIsOpen={modalIsOpen} closeModal={closeModal} openModal={openModal} />

      <div className="button-container">
        <button className="fetch-button" onClick={() => fetchData(API)} hidden={!!nextUrl || !!prevUrl}>Fetch</button>
        <button className="next-button" onClick={() => nextUrl && fetchData(nextUrl)} hidden={!nextUrl}>Next</button>
        <button className="prev-button" onClick={() => prevUrl && fetchData(prevUrl)} hidden={!prevUrl}>Previous</button>
      </div>
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
