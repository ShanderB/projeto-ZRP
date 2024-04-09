import React from 'react';
import { InputProps } from '../../interfaces/Input';
import './Inputs.css'

const Input: React.FC<InputProps> = ({ pokemonName, setPokemonName, fetchPokemon, clearTable, result }) => {
    return (
        <>
            <input
                type="text"
                className="pokemon-input"
                value={pokemonName}
                onChange={e => setPokemonName(e.target.value)}
                placeholder="Enter Pokemon name"
            />
            <button onClick={fetchPokemon}>Search</button>
            {result?.length > 0 && <button onClick={clearTable}>Clear Table</button>}
        </>
    );
}

export default Input;