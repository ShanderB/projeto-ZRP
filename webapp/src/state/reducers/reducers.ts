import { ADD_FAVORITE } from "../../constants";
import { Result } from "../../interfaces/Request";

const initialState: Result[] = [];

export const favoritesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    default:
      return state;
  }
};