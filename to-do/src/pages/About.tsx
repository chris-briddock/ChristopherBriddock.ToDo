import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About: React.FC = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="text-center">About</h1>
                    <p>
                        To Do Application is a simple to-do list application built with React and Bootstrap.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;