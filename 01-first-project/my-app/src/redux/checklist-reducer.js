const SET_TODOS_DATA = "SET_TODOS_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  todos: [],
  isFetching: true,
};

const checklistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS_DATA:
      return {
        ...state,
        todos: action.todos,
      };
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const setTodosData = (todos) => ({ type: SET_TODOS_DATA, todos });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default checklistReducer;
