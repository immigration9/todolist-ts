import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

/**
 * Why is my Typescript cannot find `div` element?
 * https://blog.bdenzer.com/error-ts-cannot-find-name-div/
 * tl;dr
 * Unlike normal js files which does not require JSX to perform rendering,
 * Typescript requires tsx files to render the DOM.
 */
const App: React.SFC = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App