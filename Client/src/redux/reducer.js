import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  allCharacters: [],
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
      };
    case FILTER:
      const filterbyGender =
        action.payload !== "All"
          ? [...state.allCharacters].filter(
              (char) => char.gender === action.payload
            )
          : [...state.allCharacters];
      return {
        ...state,
        myFavorites: filterbyGender,
      };
    case ORDER:
      //SORT OBJECT BY KEY
      const sortObject = [...state.allCharacters].sort((a, b) => {
        if (a.id > b.id) {
          return action.payload === "A" ? 1 : -1;
        } else if (a.id < b.id) {
          return action.payload === "D" ? 1 : -1;
        } else return 0;
      });
      return {
        ...state,
        myFavorites: sortObject,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
