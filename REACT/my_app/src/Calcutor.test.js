import { fireEvent,render,screen } from "@testing-library/dom";
import Calculator from './Calculator';

test("Check Add:", () => {
    render(<Calculator />);
    
    
    
    fireEvent.change(screen.getByTestId("num1"), { target: { value: '45' } });
    fireEvent.change(screen.getByTestId("num2"), { target: { value: '5' } });
    
    fireEvent.click(screen.getByText(/Add/i));
    
    
    expect(screen.getByTestId("result")).toHaveTextContent("Result:50");
});