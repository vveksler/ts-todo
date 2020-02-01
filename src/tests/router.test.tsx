import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

test("router test", () => {
  const history = createMemoryHistory();
  const { getByText, getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(getByTestId("todo-list")).toBeInTheDocument();

  fireEvent.click(getByText(/About/i));

  expect(getByText("About me")).toBeInTheDocument();
});
