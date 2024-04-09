import './Results.css';

function Results({ result, handleToggleFavorite }) {
  return (
    <div className="results-container">
      {result && result.map((item, index) => (
        <div key={index} className="result-item">
          <span className="result-name">{item.name}</span>
          <button className="toggle-favorite-button" onClick={() => handleToggleFavorite(item)}>Toggle favorite</button>
        </div>
      ))}
    </div>
  );
}

export default Results;