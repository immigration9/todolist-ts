import React from 'react'

interface TodoProps {
  /**
   * https://stackoverflow.com/questions/44764146/why-is-the-mouseevent-in-the-checkbox-event-handler-not-generic
   * When applying MouseEvent<HTMLLIElement> as the type,
   * Typescript greets you that MouseEvent is not generic.
   * Use React.MouseEvent<HTMLLIElement> as this supports generic types.
   */
  onClick(event: React.MouseEvent<HTMLLIElement>): void,
  completed: boolean,
  text: string
}

/**
 * SFC stands for Stateless Functional Component
 */
const Todo: React.SFC<TodoProps> = ({ onClick, completed, text }) => (
  <li 
    onClick={(event) => onClick(event)} 
    style={{ 
      textDecoration: completed ? 'line-through' : 'none' 
    }}>
    {text}
  </li>
)


export default Todo