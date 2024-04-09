import { TOGGLE_FAVORITE } from "../../constants";
import { Result } from "../../interfaces/Request";

export const toggleFavorite = (pokemon: Result) => ({
  type: TOGGLE_FAVORITE,
  payload: pokemon,
});