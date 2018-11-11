import React, { createRef } from 'react'
import { Dispatch } from 'redux';
import { connect } from 'react-redux'
import { addTodo } from '../actions'

interface AddTodoProps {
  dispatch: Dispatch
}

class AddTodo extends React.Component<AddTodoProps> {
  private input: React.RefObject<HTMLInputElement> = createRef<HTMLInputElement>();

  constructor(props: AddTodoProps) {
    super(props);
    
  }
  render() {
    const { dispatch } = this.props;

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            /**
             * https://medium.com/@martin_hotell/react-refs-with-typescript-a32d56c4d315
             */
            if (this.input.current) {
              if (!this.input.current.value) {
                return;
              } else {
                dispatch(addTodo(this.input.current.value))
                this.input.current.value = '';
              }
            }
          }} 
        >
          <input ref={this.input}  />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)