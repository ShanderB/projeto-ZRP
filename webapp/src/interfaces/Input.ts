import { Result } from "./Request";

export interface InputProps {
    pokemonName: string;
    setPokemonName: (name: string) => void;
    fetchPokemon: () => void;
    clearTable: () => void;
    result: Result[] | null;
}