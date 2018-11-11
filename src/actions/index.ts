import { AddTodoAction, SetVisibilityAction, ToggleTodoAction, ActionTypes } from "./ActionTypes";

let nextTodoId: number = 0

/**
 * ActionTypes를 지정해놓으면
 * 값이 정상적으로 선언되지 않았을 경우 에러를 표시한다.
 */
export const addTodo = (text: string): AddTodoAction => ({
  type: ActionTypes.ADD_TODO,
  id: nextTodoId++,
  text
})
​
export const setVisibilityFilter = (filter: string): SetVisibilityAction => ({
  type: ActionTypes.SET_VISIBILITY_FILTER,
  filter
})
​
export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: ActionTypes.TOGGLE_TODO,
  id
})
​
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
