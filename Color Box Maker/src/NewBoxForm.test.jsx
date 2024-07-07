import { render, screen, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

test("it renders without breaking", () => {
  render(<NewBoxForm />);
});

test("it should match snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

test("calls addBox with the correct data when form is submitted", () => {
  const addBoxMock = vi.fn();

  render(<NewBoxForm addBox={addBoxMock} />);

  fireEvent.change(screen.getByPlaceholderText("width"), {
    target: { value: "100px" },
  });
  fireEvent.change(screen.getByPlaceholderText("height"), {
    target: { value: "100px" },
  });
  fireEvent.change(screen.getByPlaceholderText("backgroundColor"), {
    target: { value: "blue" },
  });

  fireEvent.click(screen.getByText("Create Box"));

  expect(addBoxMock).toHaveBeenCalledTimes(1);
  expect(addBoxMock).toHaveBeenCalledWith({
    width: "100px",
    height: "100px",
    backgroundColor: "blue",
  });
});
