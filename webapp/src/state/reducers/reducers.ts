import { ADD_FAVORITE, TOGGLE_FAVORITE } from "../../constants";
import { Result } from "../../interfaces/Request";

const initialState: Result[] = [];

export const favoritesReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case TOGGLE_FAVORITE:
        const exists = state.some(pokemon => pokemon.name === action.payload.name);
        if (exists) {
          return state.filter(pokemon => pokemon.name !== action.payload.name);
        } else {
          return [...state, action.payload];
        }
      default:
        return state;
    }
  };