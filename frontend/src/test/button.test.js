import { render, fireEvent, screen } from "@testing-library/react";
import { ButtonPrimary } from "../components/Buttons";

describe("Button Test", () => {
    it('renders a Button', () => {
        render(<ButtonPrimary onClick={ (e) => { e.target.innerHTML = 'change'} }>Click Me</ButtonPrimary>);
        
        const button = screen.getByTestId("ButtonPrimary");
        
        expect(button).toHaveTextContent("Click Me");
        
        fireEvent.click(button);
        //assert the expected result
        expect(button.innerHTML).toBe("change");
    })
});