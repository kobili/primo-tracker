import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useSelector, useDispatch } from 'react-redux';
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit';

import { selectPrimogems, setPrimogems } from '../../store/slices/bannerDataSlice';

import type { RootState } from '../../store/store';
import { BannerType, BannerCurrency } from './BannerEnums';

export interface BannerInfoProps {
  bannerType: BannerType,
  bannerCurrency: BannerCurrency,
  fateSelector: (state: RootState) => number,
  pullSelector: (state: RootState) => number,
  fateSetter: ActionCreatorWithPayload<number, string>,
  pullSetter: ActionCreatorWithPayload<number, string>
}

function BannerInfo(props: BannerInfoProps) {

  const { bannerType, bannerCurrency, fateSelector, pullSelector, fateSetter, pullSetter } = props;

  const dispatch = useDispatch();

  const primos = useSelector(selectPrimogems);
  const fates = useSelector(fateSelector);
  const prevPulls = useSelector(pullSelector);

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

  const updateTotalPulls = (primos: number, fates: number, prevPulls: number) => {
    let pullsFromPrimos = primos / 160;
    let updatedTotalPulls = pullsFromPrimos + fates + prevPulls
    setTotalPulls(updatedTotalPulls);

    let hardPityPulls = bannerType === BannerType.WEAPON ? 80 : 90;
    let updatedNumberOfHardPities = Math.floor(updatedTotalPulls / hardPityPulls);
    setNumberOfHardPities(updatedNumberOfHardPities);

    let primosToNextPity = Math.ceil((hardPityPulls - (updatedTotalPulls % hardPityPulls)) * 160);
    setPrimosToNextHardPity(primosToNextPity);

    // update whether or not single or ten pulls are possible
    updateCanDoSinglePull();
    updateCanDoTenPull();
  }

  // event handlers for the single and ten pull buttons
  const doSinglePull = () => {
    if (fates >= 1) {

      dispatch(fateSetter(fates - 1));
      dispatch(pullSetter(prevPulls + 1));
    } else if (primos >= 160) {
      dispatch(setPrimogems(primos - 160));
      dispatch(pullSetter(prevPulls + 1));
    }
  }

  const doTenPull = () => {
    if (fates >= 10) {
      dispatch(fateSetter(fates - 10));
      dispatch(pullSetter(prevPulls + 10));
    } else if (fates > 0) {
      let primosToMakeDifference = 1600 - (fates * 160);
      if (primos >= primosToMakeDifference) {
        dispatch(fateSetter(0));
        dispatch(setPrimogems(primos - primosToMakeDifference));
        dispatch(pullSetter(prevPulls + 10));
      }
    } else if (primos >= 1600) {
      dispatch(setPrimogems(primos - 1600));
      dispatch(pullSetter(prevPulls + 10));
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
                  <Form.Control type="number" min={0} onChange={(e) => dispatch(setPrimogems(parseInt(e.target.value)))} value={primos !== 0 ? primos : ""}></Form.Control>
                </Col>
                <div className="col-auto">
                  <Button variant="outline-primary" onClick={() => dispatch(setPrimogems(primos + 60))}>Add Dailies (+60)</Button>
                </div>
                <div className="col-auto">
                  <Button variant="outline-primary" onClick={() => dispatch(setPrimogems(primos + 90))}>Add Welkin (+90)</Button>
                </div>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="fates-amt">
              <Form.Label>How many <span style={{ color: bannerCurrency === BannerCurrency.ACQUAINT ? "#0d6efd" : "#f542e9"}}>{bannerCurrency}</span> do you have?</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="number" min={0} onChange={(e) => dispatch(fateSetter(parseInt(e.target.value)))} value={fates !== 0 ? fates : ""}></Form.Control>
                </Col>
                <div className="col-auto">
                  <Button variant="outline-primary" onClick={() => dispatch(fateSetter(fates + 1))}>Add One</Button>
                </div>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="prev-pulls-amt">
              <Form.Label>How many pulls have you already done?</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="number" min={0} onChange={(e) => dispatch(pullSetter(parseInt(e.target.value)))} value={prevPulls !== 0 ? prevPulls : ""}></Form.Control>
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
          <p className="h4 mb-3">Total Pulls on {bannerType} Banner: {Math.floor(totalPulls)}</p>
          <div>You can hit hard pity {numberOfHardPities} {numberOfHardPities === 1 ? 'time' : 'times'}</div>
          <div>You need <span style={{ color: "#0d6efd" }}>{primosToNextHardPity}</span> primos to reach your next hard pity</div>
        </Col>
      </Row>
    </Container>
  );
}

export default BannerInfo;
