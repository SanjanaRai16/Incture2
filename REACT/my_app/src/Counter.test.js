import {fireEvent, render,screen} from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';
test("Counter component working correctly", () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/ClickMe/i);
    fireEvent.click(buttonElement);
    const updatedCount = screen.getByText(/You clicked button 10 times/i); 
    expect(updatedCount).toBeInTheDocument();   
}
);
test("Checking button functionality", async() => {
    render(<Counter />);        
    expect(screen.getByText(/Count:0times/i)).toBeInTheDocument();

 const button = screen.getByRole('button', { name: /ClickMe/i });
 await userEvent.click(button);
    expect(screen.getByText(/Count:1times/i)).toBeInTheDocument();
});  
                                                                                    
