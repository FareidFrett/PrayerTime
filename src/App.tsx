import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import FNavbar from './assets/Components/FNavbar';

function App() {
  return (
    <>
      <FNavbar title="Prayer Times" />
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Row 1 Col 1</td>
                  <td>Row 1 Col 2</td>
                </tr>
                <tr>
                  <td>Row 2 Col 1</td>
                  <td>Row 2 Col 2</td>
                </tr>
                <tr>
                  <td>Row 3 Col 1</td>
                  <td>Row 3 Col 2</td>
                </tr>
                <tr>
                  <td>Row 4 Col 1</td>
                  <td>Row 4 Col 2</td>
                </tr>
                <tr>
                  <td>Row 5 Col 1</td>
                  <td>Row 5 Col 2</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
