import { render, screen } from "@testing-library/react";
import Box from "./Box";

test("renders a Box without crashing", () => {
  render(<Box width={"100px"} height={"100px"} backgroundColor={"red"} />);
});

test("renders a Box without crashing", () => {
  const { asFragment } = render(
    <Box width={"100px"} height={"100px"} backgroundColor={"red"} />
  );
  expect(asFragment()).toMatchSnapshot();
});
