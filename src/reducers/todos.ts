import { Reducer } from 'redux';
import { TodosState } from "./ReducerTypes";
import { Actions, ActionTypes } from "../actions/ActionTypes";

export const initialTodosState: TodosState = {
  todos: []
}

const todos = (state: TodosState = initialTodosState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          id: action.id,
          text: action.text,
          completed: false
        })
      }
    case ActionTypes.TOGGLE_TODO:
      return { 
        ...state,
        todos: state.todos.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      }
    default:
      return state
  }
}
​
export default todos