import { useState } from 'react';

export const usePokemonNameState = () => {
  const [pokemonName, setPokemonName] = useState('');

  return {
    pokemonName,
    setPokemonName,
  };
};