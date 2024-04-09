import { useState } from 'react';
import { Request, Result } from './interfaces/Request';
import { connect } from 'react-redux';
import { toggleFavorite } from './state/actions/actions';
import { API } from './constants';
import Modal from 'react-modal';
import './App.css'
import axios from 'axios';
import Favorites from './components/Favorites';

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
        setPrevUrl(data.previous ?  API + new URL(data.previous).search : null);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <button onClick={() => fetchData(API)} hidden={!!nextUrl || !!prevUrl}>Fetch</button>
      <button onClick={() => nextUrl && fetchData(nextUrl)} hidden={!nextUrl}>Next</button>
      <button onClick={() => prevUrl && fetchData(prevUrl)} hidden={!prevUrl}>Previous</button>

      {result && result.map((item, index) => (
        <div key={index}>
          {item.name}: {item.url}
          <button onClick={() => handleToggleFavorite(item)}>Toggle favorite</button>
        </div>
      ))}

     <Favorites favorites={favorites} modalIsOpen={modalIsOpen} closeModal={closeModal} openModal={openModal} />

    </>
  )
}

const mapStateToProps = (state: Result[]) => ({
  favorites: state,
});

const mapDispatchToProps = {
  toggleFavorite,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
