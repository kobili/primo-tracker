import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App() {

  // state hooks
  const [primos, setPrimos] = useState( parseInt(localStorage.getItem("primos")) || parseInt(0));
  const [fates, setFates] = useState( parseInt(localStorage.getItem("fates")) || parseInt(0));
  const [prevPulls, setPrevPulls] = useState( parseInt(localStorage.getItem("prevPulls")) || parseInt(0));
  const [totalPulls, setTotalPulls] = useState(0);
  const [numberOfHardPities, setNumberOfHardPities] = useState(0);
  const [primosToNextHardPity, setPrimosToNextHardPity] = useState(14400);

  // useEffect to run a function on page load
  useEffect(() => {
    // set the total pulls and hard pity state variables from saved values
    updateTotalPulls(primos, fates, prevPulls);
  });

  // use useEffect to save values to local storage when ever values are updated
  useEffect(() => {
      localStorage.setItem("primos", primos);
      localStorage.setItem("fates", fates);
      localStorage.setItem("prevPulls", prevPulls);
      // localStorage.setItem("totalPulls", totalPulls);
      // localStorage.setItem("numberOfHardPities", numberOfHardPities);
      // localStorage.setItem("primosToNextHardPity", primosToNextHardPity);
  }, [primos, fates, prevPulls]);

  // functions to update state
  const updatePrimos = (newValue) => {  // newValue is a number
    setPrimos(newValue);
    updateTotalPulls(newValue, fates, prevPulls);
  };

  const updateFates = (newValue) => {
    setFates(newValue);
    updateTotalPulls(primos, newValue, prevPulls);
  };

  const updatePrevPulls = (newValue) => {
    setPrevPulls(newValue);
    updateTotalPulls(primos, fates, newValue);
  }

  const updateTotalPulls = (primos, fates, prevPulls) => {
    let pullsFromPrimos = primos / 160;
    let updatedTotalPulls = pullsFromPrimos + fates + prevPulls
    setTotalPulls(updatedTotalPulls);

    let updatedNumberOfHardPities = Math.floor(updatedTotalPulls / 90);
    setNumberOfHardPities(updatedNumberOfHardPities);

    let primosToNextPity = Math.ceil((90 - (updatedTotalPulls % 90)) * 160);
    setPrimosToNextHardPity(primosToNextPity);
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3" controlId="primos-amt">
              <Form.Label>How many Primogems do you have?</Form.Label>
              <Form.Control type="number" min={0} onChange={(e) => updatePrimos(parseInt(e.target.value))} value={primos !== 0 ? primos : ""}></Form.Control>
              <Row className="mt-1">
                <Col lg={5}>
                  <Button variant="primary" onClick={() => updatePrimos(primos + 60)}>Commissions (+60)</Button>
                </Col>
                <Col>
                  <Button variant="primary" onClick={() => updatePrimos(primos + 90)}>Welkin (+90)</Button>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="fates-amt">
              <Form.Label>How many Fates do you have?</Form.Label>
              <Form.Control type="number" min={0} onChange={(e) => updateFates(parseInt(e.target.value))} value={fates !== 0 ? fates : ""}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="prev-pulls-amt">
              <Form.Label>How many pulls have you already done?</Form.Label>
              <Form.Control type="number" min={0} onChange={(e) => updatePrevPulls(parseInt(e.target.value))} value={prevPulls !== 0 ? prevPulls : ""}></Form.Control>
            </Form.Group>
          </Form>
          <div>Total Pulls on Banner: {Math.floor(totalPulls)}</div>
        </Col>
        <Col lg={6} className="align-content-center">
          <div>You can hit hard pity {numberOfHardPities} {numberOfHardPities === 1 ? 'time' : 'times'}</div>
          <div>You need {primosToNextHardPity} primos to reach your next hard pity</div>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
