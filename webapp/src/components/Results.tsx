function Results({ result, handleToggleFavorite }) {
    return (
        <>
            {result && result.map((item, index) => (
                <div key={index}>
                    {item.name}: {item.url}
                    <button onClick={() => handleToggleFavorite(item)}>Toggle favorite</button>
                </div>
            ))}
        </>
    );
}

export default Results;