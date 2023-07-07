import { render, screen } from "@testing-library/react";
import Modal from "../components/Modal";

describe("ModalTest", () => {
    it('renders a Modal', () => {
        render(<Modal onClick={ (e) => { e.target.innerHTML = 'change'} }>Modal</Modal>);
        
        const modal = screen.getByTestId("Modal");
        
        expect(modal).toHaveTextContent("Modal");
    })
});