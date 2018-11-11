import { Reducer } from 'redux';
import { VisibilityFilters } from '../actions';
import { Actions, ActionTypes } from '../actions/ActionTypes';
import { VisibilityState } from './ReducerTypes';
​
export const initialVisibilityState: VisibilityState = {
  visibility: VisibilityFilters.SHOW_ALL
}

const visibilityFilter = (state: VisibilityState = initialVisibilityState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SET_VISIBILITY_FILTER:
      return { ...state, visibility: action.filter }
    default:
      return state
  }
}
​
export default visibilityFilter