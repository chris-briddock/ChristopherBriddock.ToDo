import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Todo from "./ToDo";

describe('Todo', () => {
  test('should render the Todo component', () => {
    render(<Todo />);

    const title = screen.getByText('Todo List');
    expect(title).toBeInTheDocument();
  });

  test('should add a task to the list', () => {
    render(<Todo />);

    const input = screen.getByPlaceholderText('Enter a new task');
    const button = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(button);

    const task = screen.getByText('Task 1');
    expect(task).toBeInTheDocument();
  });
  test('should remove a task from the list', () => {
    render(<Todo />);

    const input = screen.getByPlaceholderText('Enter a new task');
    const button = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(button);
    
    const removeButton = screen.getByText('Remove');
    fireEvent.click(removeButton!);

    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
  });
  test('clears the input field', () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText('Enter a new task');
    const button = screen.getByText('Add Task');
    fireEvent.change(input, { target: { value: 'Buy milk' } });
    fireEvent.click(button);
    fireEvent.click(screen.getByText('Clear'));
    expect(input).toHaveValue('');
  });
  test('does not add an empty task to the list', () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText('Enter a new task');
    const button = screen.getByText('Add Task');
    fireEvent.change(input, { target: { value: ' ' } });
    fireEvent.click(button);
    expect(screen.queryByText(' ')).not.toBeInTheDocument();
  });
  test('updates the input field when a task is added or removed', () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText('Enter a new task');
    const button = screen.getByText('Add Task');
    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(button);
    const task = screen.getByText('Task 1');
    fireEvent.click(task.parentElement!);
    expect(input).toHaveValue('');
  });
  test('updates the input field when the Clear button is clicked', () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText('Enter a new task');
    const button = screen.getByText('Add Task');
    fireEvent.change(input, { target: { value: 'Buy milk' } });
    fireEvent.click(button);
    fireEvent.click(screen.getByText('Clear'));
    expect(input).toHaveValue('');
  });
});