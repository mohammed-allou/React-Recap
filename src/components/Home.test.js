import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Home from "./Home";

describe("Home component", () => {
    it('check buttton render', () => {
        const { queryByTitle } = render(<Home />);
        const btn = queryByTitle('checkBtn');
        expect(btn).toBeTruthy();
    })
    it('check text render', () => {
        const { queryByTitle } = render(<Home />);
        const text = queryByTitle('checkText');
        expect(text.innerHTML).toBe("hellow!!!");
    })

})
test('should render Home component', () => {
    render(<Home />);
    const homeElement = screen.getByTestId('checkText');
    expect(homeElement).toBeInTheDocument()
    expect(homeElement).toHaveTextContent("hellow!!!")
})