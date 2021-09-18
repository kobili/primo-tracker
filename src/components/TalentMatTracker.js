import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import MaterialInputBox from './MaterialInputBox';

function TalentMatTracker() {



    const GOLD_BOOKS_REQUIRED = 114;
    const SILVER_BOOKS_REQUIRED = 63;
    const BROWN_BOOKS_REQUIRED = 9;

    let [goldBooksAcquired, setGoldBooksAcquired] = useState(0);
    let [silverBooksAcquired, setSilverBooksAcquired] = useState(0);
    let [brownBooksAcquired, setBrownBooksAcquired] = useState(0);

    return (
        <Container>
            <Row>
                {/* Input for gold books */}
                <MaterialInputBox 
                    value={goldBooksAcquired}
                    setValue={setGoldBooksAcquired}
                />

                {/* Input for Silver Boooks */}
                <MaterialInputBox 
                    value={silverBooksAcquired}
                    setValue={setSilverBooksAcquired}
                />

                {/* Input for brown books */}
                <MaterialInputBox 
                    value={brownBooksAcquired}
                    setValue={setBrownBooksAcquired}
                />

            </Row>
        </Container>
    );
}

export default TalentMatTracker;