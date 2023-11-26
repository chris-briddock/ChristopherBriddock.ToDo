import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header component', () => {
  test('should render the navbar', () => {
    render(<Header />);

    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
  });

  test('should render the navbar brand with correct text', () => {
    render(<Header />);

    const navbarBrand = screen.getByTestId('navbar-brand');
    expect(navbarBrand).toBeInTheDocument();
    expect(navbarBrand).toHaveTextContent('To Do Application');
  });

  test('should render the home link', () => {
    render(<Header />);

    const homeLink = screen.getByTestId('home-link');
    expect(homeLink).toBeInTheDocument();
  });

  test('should render the about link', () => {
    render(<Header />);

    const aboutLink = screen.getByTestId('about-link');
    expect(aboutLink).toBeInTheDocument();
  });
});