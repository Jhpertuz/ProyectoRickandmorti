import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

let initialState = {
  myFavorite: [],
  allCharacters: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorite: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorite: action.payload,
      };

    case FILTER:
      const allCharactersFiltered = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorite: allCharactersFiltered,
      };

    case ORDER:
      const allCharactersCopy = [...state.allCharacters];
      return {
        ...state,
        myFavorite:
          action.payload === "A"
            ? allCharactersCopy.sort((a, b) => a.id - b.id)
            : allCharactersCopy.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
}
