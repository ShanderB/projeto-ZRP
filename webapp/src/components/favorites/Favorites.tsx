import Modal from 'react-modal';
import './Favorites.css';

function Favorites({ favorites, modalIsOpen, closeModal, openModal }) {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      borderRadius: '4px',
      padding: '20px',
      width: '80%',
      maxWidth: '500px',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  const hasFavorites = favorites.length;

  return (
    <>
      <button
        className={`open-modal-button ${hasFavorites ? '' : 'disabled'}`}
        onClick={openModal} disabled={!hasFavorites}
        title={hasFavorites ? '' : 'You need to select a favorite first'}
        style={{position: 'absolute', marginLeft: '47%'}}>
        Show Favorites
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Favorites Modal"
        style={customStyles}
      >
        <h2 className="modal-title">Favorites:</h2>
        {favorites && favorites.map((item, index) => {
          const name = item.name.charAt(0).toUpperCase() + item.name.slice(1); // Make the first letter uppercase

          return (
            <div key={index} className="favorite-item">
              <span className="favorite-name">{name}</span>
            </div>
          )
        })}
        <button className="close-modal-button" onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

export default Favorites;