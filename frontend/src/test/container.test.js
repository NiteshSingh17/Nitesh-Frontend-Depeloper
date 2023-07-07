import { render, screen } from "@testing-library/react";
import Container from "../components/Container";

describe("Container Test", () => {
    it('renders a Container', () => {
        render(<Container>Container</Container>);
        
        const container = screen.getByTestId("Container");
        
        expect(container).toHaveTextContent("Container");

    })
});