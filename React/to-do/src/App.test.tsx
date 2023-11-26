import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import '@testing-library/jest-dom';

test('renders App component with Header', () => {
  render(
      <App />
  );

  // Assuming your Header component has a unique test ID
  const headerElement = screen.getByTestId('navbar');
  expect(headerElement).toBeInTheDocument();
});

test('renders routes', () => {  
    render( <App /> );

    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
});

test('navigates to About page', () => {  
    render( <App /> );

    const aboutLink = screen.getByText('About');
    userEvent.click(aboutLink);
    expect(aboutLink).toBeInTheDocument();

});