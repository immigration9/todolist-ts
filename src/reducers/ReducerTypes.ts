import { Todo } from "../model";

export interface TodosState {
  todos: Todo[]
}

export interface VisibilityState {
  visibility: string
}