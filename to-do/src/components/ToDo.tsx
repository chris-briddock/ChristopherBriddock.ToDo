import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

const Todo: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    /**
     * @param {string} newTask - The new task to add
     * @returns {void}
     */
    const addTask = (): void => {
        if (newTask.trim() !== '') {
            setTasks((prevTasks) => [...prevTasks, newTask]);
            setNewTask('');
        }
    };

    /**
     * 
     * @param {number} index - The index of the task to remove
     * @returns {void}
     */
    const removeTask = (index: number): void => {
        const updatedTasks: string[] = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };
    /**
     * @returns {void}
     */
    const clearTask = (): void => {
      setTasks(() => []);
      setNewTask('');
    }

    return (
        <Container className="mt-5" data-testid="todo">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="text-center">Todo List</h1>
                    <Form>
                        <Form.Group controlId="taskInput">
                            <Form.Control
                                type="text"
                                placeholder="Enter a new task"
                                value={newTask}
                                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setNewTask(e.target.value)}
                            />
                        </Form.Group>
                        <Button className='m-2' variant="primary" onClick={addTask}>
                            Add Task
                        </Button>
                        <Button className='m-2' variant="secondary" onClick={clearTask}>
                            Clear
                        </Button>
                    </Form>
                    <ListGroup className="mt-3">
                        {tasks.map((task, index) => (
                            <div key={index}>
                                <ListGroup.Item data-testid="todo-link" contentEditable="true">
                                    {task}
                                </ListGroup.Item>
                                <Button
                                    variant="danger"
                                    className="float-right m-2"
                                    onClick={() => removeTask(index)}>
                                    Remove
                                </Button>
                            </div>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Todo;
