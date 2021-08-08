import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container className="mt-4">
      <Row>
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3" controlId="primos-amt">
              <Form.Label>How many Primogems do you have?</Form.Label>
              <Form.Control type="number" min={0}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="fates-amt">
              <Form.Label>How many Fates do you have?</Form.Label>
              <Form.Control type="number" min={0}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="pulls-amt">
              <Form.Label>How many pulls have you already done?</Form.Label>
              <Form.Control type="number" min={0}></Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
