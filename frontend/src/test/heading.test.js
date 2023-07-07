import { render, screen } from "@testing-library/react";
import { LgHeading } from "../components/Headings";

describe("Heading Test", () => {
    it('renders a heading', () => {
        render(<LgHeading >heading</LgHeading>);
        
        const heading = screen.getByTestId("LgHeading");
        
        expect(heading).toHaveTextContent("heading");

    })
});