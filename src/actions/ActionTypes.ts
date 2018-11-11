export enum ActionTypes {
  ADD_TODO = '@context/ADD_TODO',
  SET_VISIBILITY_FILTER = '@context/SET_VISIBILITY_FILTER',
  TOGGLE_TODO = '@context/TOGGLE_TODO'
}

export interface AddTodoAction {
  type: ActionTypes.ADD_TODO,
  id: number,
  text: string
}

export interface SetVisibilityAction {
  type: ActionTypes.SET_VISIBILITY_FILTER,
  filter: string
}

export interface ToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO,
  id: number
}

/**
 * Union을 이용하여 Actions Interface를 산출한다.
 */
export type Actions = AddTodoAction | SetVisibilityAction | ToggleTodoAction;