import './Results.css';

function Results({ result, handleToggleFavorite, favorites }) {
  return (
    <div className="results-container">
      {result && result.map((item, index) => {
        const isFavorite = favorites.some((favorite) => favorite.name === item.name);
        return (
          <div key={index} className="result-item">
            <span className="result-name">{item.name}</span>
            <button 
              className={`toggle-favorite-button ${isFavorite ? 'favorite' : ''}`} 
              onClick={() => handleToggleFavorite(item)}
            >
              {isFavorite ? 'In Favorites' : 'Toggle Favorite'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Results;