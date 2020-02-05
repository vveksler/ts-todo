import React, { useRef } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../../modules/todos/todosAC';

export const TodoForm: React.FC = () => {
  const dispatch = useDispatch()
  const ref = useRef<HTMLInputElement>(null);
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && ref.current?.value !== '') {
      const action = ref.current!.value
      
      dispatch(addTodo(action))
      ref.current!.value = '';
    }
  };

  console.log('render Todo Form');
  return (
    <div className="input-field">
      <input
        ref={ref}
        onKeyPress={keyPressHandler}
        type="text"
        id="title"
      />
      <label htmlFor="title" className="active">
        Type todo
      </label>
    </div>
  );
};
