import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Item from "../components/Item";

function isClassComponent(component) {
  return (
    typeof component === "function" && !!component.prototype.isReactComponent
  );
}

test("uses a class component", () => {
  expect(isClassComponent(Item)).toBe(true);
});

test("the <li> does not have a className when initialized", () => {
  const { container } = render(<Item name="Milk" category="Dairy" />);
  expect(container.querySelector("li")).toBeInTheDocument();
  expect(container.querySelector("li").className).not.toContain("in-cart");
});

test("the <li> has a className of 'in-cart' when the Add to Cart button is clicked", () => {
  const { container } = render(<Item name="Milk" category="Dairy" />);
  fireEvent.click(screen.getByText("Add to Cart")); // Make sure the button text matches exactly
  expect(container.querySelector(".in-cart")).toBeInTheDocument();
});

