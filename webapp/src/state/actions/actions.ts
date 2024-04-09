import { ADD_FAVORITE } from "../../constants";
import { Result } from "../../interfaces/Request";

export const addFavorite = (pokemon: Result) => ({
  type: ADD_FAVORITE,
  payload: pokemon,
});