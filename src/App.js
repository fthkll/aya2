import './App.css';
import React from 'react';
import SubForm from './SubForm';
import ToDoList from './ToDoList';
import { Container, Row, Col } from 'shards-react';

function App() {
  return (
    <Container>
      <Row>
        <Col sm={{ size: 6, order: 3, offset: 3 }}>
          <SubForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
