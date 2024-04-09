import React from 'react';
import { InputProps } from '../../interfaces/Input';
import './Inputs.css'

const Input: React.FC<InputProps> = ({ pokemonName, setPokemonName, fetchPokemon, clearTable, result }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <input
                type="text"
                className="pokemon-input"
                value={pokemonName}
                onChange={e => setPokemonName(e.target.value)}
                placeholder="Enter Pokemon name"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <button onClick={fetchPokemon}>Search</button>
                {result?.length > 0 && <button onClick={clearTable}>Clear Table</button>}
            </div>
        </div>
    );
}

export default Input;