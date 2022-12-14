import { checklistAPI } from "../api/api";

const SET_TODOS_DATA = "SET_TODOS_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

let initialState = {
  todos: [
    {
      completed: true,
      id: 151,
      todo: "Do something nice for someone I care about",
      userId: 43,
    },
  ],
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
    case TOGGLE_COMPLETED: {
      return { ...state, 
        todos: state.todos.map((todo) => {
        if (todo.id === action.id) {
          return {...todo, completed: !todo.completed}
        }
        return todo;
      }) };
    }
    default:
      return state;
  }
};

// action creators list
export const setTodosData = (todos) => ({ type: SET_TODOS_DATA, todos });
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleCompleted = (id) => ({type: TOGGLE_COMPLETED, id});

// thunks list
export const getTodos = (t) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    checklistAPI.getTodos().then((response) => {
      dispatch(toggleIsFetching(false));
      dispatch(setTodosData(response.data.todos));
    });
  }
}
export const onTodosChange = (t) => {
  return (dispatch) => {
    checklistAPI.onTodosChange(t).then((response) => {
        if (response.status === 200) {
          dispatch(toggleCompleted(t.id));
        }
      });
  }
}

export default checklistReducer;
