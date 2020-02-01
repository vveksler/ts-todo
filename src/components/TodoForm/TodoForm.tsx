import React, { useRef, useContext } from 'react';
import { TodosDispatch } from '../../context/TodosContext';
import { addTodo } from '../../modules/todos/todosAC';

export const TodoForm: React.FC = () => {
  const { dispatch } = useContext(TodosDispatch);
  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null);


  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && ref.current?.value !== '') {
      dispatch(addTodo(ref.current!.value));
      ref.current!.value = '';
      // console.log(title)
      // setTitle('')
    }
  };

  return (
    <div className="input-field">
      <input
        // onChange={changeHandler}
        // value={title}
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
