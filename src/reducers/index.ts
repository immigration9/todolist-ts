import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { Reducer } from 'redux';
import { Actions } from '../actions/ActionTypes'
import { TodosState, VisibilityState } from './ReducerTypes';

export interface ApplicationState {
  todos: TodosState,
  visibilityFilter: VisibilityState
}

/**
 * If an error happens here,
 * The problem probably will be caused by the error from the respective reducers.
 * Don't panic, as the type `combineReducers<State>` is not wrong.
 * Just go visit one of your reducers as they will possess errors.
 */
export const reducers = combineReducers<ApplicationState>({
  todos: todos,
  visibilityFilter: visibilityFilter
})

export default reducers;