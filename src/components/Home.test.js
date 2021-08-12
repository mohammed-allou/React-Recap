import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Home from "./Home";

describe("Home component", () => {
    it('check buttton render', () => {
        const { queryByTitle } = render(<Home />);
        const btn = queryByTitle('checkBtn');
        expect(btn).toBeTruthy();
    })
    it('render button click', () => {
        const { getAllByTestId } = render(<Home />);
        const btn = getAllByTestId('checkBtn');
        expect(btn).toHaveLength(1);
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

describe('event click', () => {
    it('click', async () => {
        const handleClick = jest.fn()
        const { queryByTestId } = render(<Home handleClick={handleClick} />);
        await fireEvent.click(queryByTestId('checkBtn'))
        expect(handleClick).not.toHaveBeenCalled();
    })
})
describe('event after click', () => {
    it('render after click', async () => {
        const handleClick = jest.fn()
        const { queryByTestId } = render(<Home handleClick={handleClick} />);
        await fireEvent.click(queryByTestId('checkBtn'))
        expect(screen.getByTestId('checkTaxtRender')).toEqual(expect.anything())
    })
})