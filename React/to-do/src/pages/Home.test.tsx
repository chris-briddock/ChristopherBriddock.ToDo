import Home from "./Home";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('Home', () => {
    test('renders to do', () => {
      render(<Home />);
      const toDoComponent = screen.getByTestId('todo');
      expect(toDoComponent).toBeInTheDocument();
    });
});