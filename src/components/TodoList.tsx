import React from 'react'
import TodoComponent from './Todo'
import { Todo } from '../model';

interface TodoListProps {
  todos: Todo[],
  toggleTodo(id: number): void
}

const TodoList: React.SFC<TodoListProps> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <TodoComponent key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)


export default TodoList