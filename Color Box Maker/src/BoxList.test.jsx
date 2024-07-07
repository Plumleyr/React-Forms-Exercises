import { render, fireEvent, screen } from "@testing-library/react";
import BoxList from "./BoxList";

it("doesn't break on load", () => {
  render(<BoxList />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a box to the list", () => {
  render(<BoxList />);

  const widthInput = screen.getByPlaceholderText("width");
  const heightInput = screen.getByPlaceholderText("height");
  const backgroundColorInput = screen.getByPlaceholderText("backgroundColor");
  const createButton = screen.getByText("Create Box");

  fireEvent.change(widthInput, { target: { value: "100px" } });
  fireEvent.change(heightInput, { target: { value: "200px" } });
  fireEvent.change(backgroundColorInput, { target: { value: "blue" } });
  fireEvent.click(createButton);

  const box = screen.getByTestId("box-0");
  expect(box).toHaveStyle("width: 100px;");
  expect(box).toHaveStyle("height: 200px;");
  expect(box).toHaveStyle("background-color: rgb(0, 0, 255);");
});
