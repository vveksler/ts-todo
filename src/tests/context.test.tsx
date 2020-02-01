import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodosDispatch, TodosProvider } from "../context/TodosContext";

const testTodo = {
  title: "test todo",
  id: 1,
  completed: false
}

const Mock = () => (
  <TodosProvider>
    <TodosDispatch.Consumer>
      {({ todos, dispatch }) => (
        <>
          <button type="button" data-testid="dispatchAdd" onClick={() => dispatch({
            type: 'add',
            payload: testTodo
          })}>Add todo</button>
          <button type="button" data-testid="dispatchRemove" onClick={() => dispatch({
            type: 'remove',
            payload: testTodo
          })}>Remove todo</button>
          <button type="button" data-testid="dispatchToggle" onClick={() => dispatch({
            type: 'toggle',
            payload: testTodo
          })}>Toggle todo</button>
          {todos.length > 0 ? todos.map((todo: any) => (
            <div key={todo.id}>{todo.title} is completed {String(todo.completed)}</div>
          )) : <div data-testid="empty">No todos</div>}
        </>
      )}
    </TodosDispatch.Consumer>
  </TodosProvider>
);

describe("Testing todo context", () => {
  it("Add todo", () => {
    const { getByText, getByTestId } = render(Mock());

    fireEvent.click(getByTestId("dispatchAdd"))

    expect(getByText("test todo is completed false")).toBeInTheDocument()
  });

  it("Remove todo", () => {
    const { getByTestId } = render(Mock());

    fireEvent.click(getByTestId("dispatchRemove"))

    expect(getByTestId("empty").textContent).toBe('No todos')
  });

  it("Toggle todo", () => {
    const { getByText, getByTestId } = render(Mock());

    fireEvent.click(getByTestId("dispatchAdd"))
    fireEvent.click(getByTestId("dispatchToggle"))

    expect(getByText(/^test .../i).textContent).toBe('test todo is completed true')
  });
});
