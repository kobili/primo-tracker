import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function PrimogemCalc() {

  // state hooks
  const [primos, setPrimos] = useState(parseInt(localStorage.getItem("primos")) || parseInt(0));
  const [fates, setFates] = useState(parseInt(localStorage.getItem("fates")) || parseInt(0));
  const [prevPulls, setPrevPulls] = useState(parseInt(localStorage.getItem("prevPulls")) || parseInt(0));
  const [totalPulls, setTotalPulls] = useState(0);
  const [numberOfHardPities, setNumberOfHardPities] = useState(0);
  const [primosToNextHardPity, setPrimosToNextHardPity] = useState(14400);
  const [canDoSinglePull, setCanDoSinglePull] = useState(false);        // use this state variable to enable/disable single pull button
  const [canDoTenPull, setCanDoTenPull] = useState(false);              // use this state variable to enable/disable ten pull button

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

    // update whether or not single or ten pulls are possible
    updateCanDoSinglePull();
    updateCanDoTenPull();
  }

  // event handlers for the single and ten pull buttons
  const doSinglePull = () => {
    if (fates >= 1) {
      setFates(fates - 1);
      updatePrevPulls(prevPulls + 1);
    } else if (primos >= 160) {
      setPrimos(primos - 160);
      updatePrevPulls(prevPulls + 1);
    }
  }

  const doTenPull = () => {
    if (fates >= 10) {
      setFates(fates - 10);
      updatePrevPulls(prevPulls + 10);
    } else if (fates > 0) {
      let primosToMakeDifference = 1600 - (fates * 160);
      if (primos >= primosToMakeDifference) {
        setFates(0);
        setPrimos(primos - primosToMakeDifference);
        updatePrevPulls(prevPulls + 10);
      }
    } else if (primos >= 1600) {
      setPrimos(primos - 1600);
      updatePrevPulls(prevPulls + 10);
    }
  }

  // determine if single or ten pulls are possible
  const updateCanDoSinglePull = () => {
    if (fates >= 1) {
      setCanDoSinglePull(true);
    } else if (primos >= 160) {
      setCanDoSinglePull(true);
    } else {
      setCanDoSinglePull(false);
    }
  }

  const updateCanDoTenPull = () => {
    if (fates >= 10) {
      setCanDoTenPull(true);
    } else if (fates > 0) {
      let primosToMakeDifference = 1600 - (fates * 160);
      if (primos >= primosToMakeDifference) {
        setCanDoTenPull(true);
      }
    } else if (primos >= 1600) {
      setCanDoTenPull(true);
    } else {
      setCanDoTenPull(false);
    }
  }

  return (
    <Container className="mt-4" >
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form>

            <Form.Group className="mb-3" controlId="primos-amt">
              <Form.Label>How many Primogems do you have?</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="number" min={0} onChange={(e) => updatePrimos(parseInt(e.target.value))} value={primos !== 0 ? primos : ""}></Form.Control>
                </Col>
                <div className="col-auto">
                  <Button variant="outline-primary" onClick={() => updatePrimos(primos + 60)}>Add Dailies (+60)</Button>
                </div>
                <div className="col-auto">
                  <Button variant="outline-primary" onClick={() => updatePrimos(primos + 90)}>Add Welkin (+90)</Button>
                </div>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="fates-amt">
              <Form.Label>How many Fates do you have?</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="number" min={0} onChange={(e) => updateFates(parseInt(e.target.value))} value={fates !== 0 ? fates : ""}></Form.Control>
                </Col>
                <div className="col-auto">
                  <Button variant="outline-primary" onClick={() => updateFates(fates + 1)}>Add One</Button>
                </div>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="prev-pulls-amt">
              <Form.Label>How many pulls have you already done?</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="number" min={0} onChange={(e) => updatePrevPulls(parseInt(e.target.value))} value={prevPulls !== 0 ? prevPulls : ""}></Form.Control>
                </Col>
                <div className="col-auto">
                  <Button variant="outline-primary" disabled={!canDoSinglePull} onClick={doSinglePull}>1 Pull</Button>
                </div>
                <div className="col-auto">
                  <Button variant="outline-primary" disabled={!canDoTenPull} onClick={doTenPull}>10 Pull</Button>
                </div>
              </Row>
            </Form.Group>

          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={6} style={{ textAlign: "center" }}>
          <p className="h4 mb-3">Total Pulls on Banner: {Math.floor(totalPulls)}</p>
          <div>You can hit hard pity {numberOfHardPities} {numberOfHardPities === 1 ? 'time' : 'times'}</div>
          <div>You need <span style={{ color: "#0d6efd" }}>{primosToNextHardPity}</span> primos to reach your next hard pity</div>
        </Col>
      </Row>
    </Container>
  );
}

export default PrimogemCalc;