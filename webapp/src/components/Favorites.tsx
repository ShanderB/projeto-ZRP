import Modal from 'react-modal';

function Favorites({ favorites, modalIsOpen, closeModal, openModal }) {
  return (
    <>
      {favorites.length > 0 && (
        <button onClick={openModal}>Show favorites</button>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Favorites Modal"
      >
        <h2>Favorites:</h2>
        {favorites && favorites.map((item, index) => (
          <div key={index}>
            {item.name}: {item.url}
          </div>
        ))}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

export default Favorites;