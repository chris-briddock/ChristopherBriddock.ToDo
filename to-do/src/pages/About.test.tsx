import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';

describe('About', () => {
  test('renders heading', () => {
    render(<About />);
    const heading = screen.getByText('About');
    expect(heading).toBeInTheDocument();
  });

  test('renders paragraph', () => {
    render(<About />);
    const paragraph = screen.getByText(
      'To Do Application is a simple to-do list application built with React and Bootstrap.',
    );
    expect(paragraph).toBeInTheDocument();
  });
});