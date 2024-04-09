import Modal from 'react-modal';

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


  return (
    <>
      {favorites.length > 0 && (
        <button onClick={openModal}>Show favorites</button>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Favorites Modal"
        style={customStyles}
      >
        <h2>Favorites:</h2>
        {favorites && favorites.map((item, index) => (
          <div key={index} >
            <span >{item.name}</span>
          </div>
        ))}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

export default Favorites;