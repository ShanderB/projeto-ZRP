import { useState } from 'react';
import { Request, Result } from './interfaces/Request';
import { connect } from 'react-redux';
import { toggleFavorite } from './state/actions/actions';
import { API } from './constants';
import Modal from 'react-modal';
import './App.css'
import axios from 'axios';
import Favorites from './components/Favorites';
import Results from './components/results/Results';

Modal.setAppElement('#root');


function App({ favorites, toggleFavorite }) {
  const [result, setResult] = useState<Result[] | null>(null);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [prevUrl, setPrevUrl] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleToggleFavorite = (pokemon: Result) => {
    toggleFavorite(pokemon);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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

  return (
    <div className="app-container">
      <div className="button-container">
        <button className="fetch-button" onClick={() => fetchData(API)} hidden={!!nextUrl || !!prevUrl}>Fetch</button>
        <button className="next-button" onClick={() => nextUrl && fetchData(nextUrl)} hidden={!nextUrl}>Next</button>
        <button className="prev-button" onClick={() => prevUrl && fetchData(prevUrl)} hidden={!prevUrl}>Previous</button>
      </div>

      <Results result={result} handleToggleFavorite={handleToggleFavorite} favorites={favorites} />

      <Favorites favorites={favorites} modalIsOpen={modalIsOpen} closeModal={closeModal} openModal={openModal} />
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
