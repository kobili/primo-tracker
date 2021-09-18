import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import MaterialInputBox from './MaterialInputBox';

function TalentMatTracker() {

    const GOLD_BOOKS_REQUIRED = 114;
    const SILVER_BOOKS_REQUIRED = 63;
    const BROWN_BOOKS_REQUIRED = 9;

    let [goldBooksAcquired, setGoldBooksAcquired] = useState(parseInt(localStorage.getItem("goldBooks")) || parseInt(0));
    let [silverBooksAcquired, setSilverBooksAcquired] = useState(parseInt(localStorage.getItem("silverBooks")) || parseInt(0));
    let [brownBooksAcquired, setBrownBooksAcquired] = useState(parseInt(localStorage.getItem("brownBooks")) || parseInt(0));

    let [totalGoldBooks, setTotalGoldBooks] = useState(0);
    let [totalSilverBooks, setTotalSilverBooks] = useState(0);


    useEffect(() => {
        calculateTotalBooks();
    });

    useEffect(() => {
        // save state vars to local storage on change
        localStorage.setItem("goldBooks", goldBooksAcquired);
        localStorage.setItem("silverBooks", silverBooksAcquired);
        localStorage.setItem("brownBooks", brownBooksAcquired);

        calculateTotalBooks();
    }, [goldBooksAcquired, silverBooksAcquired, brownBooksAcquired]);

    const calculateTotalBooks = () => {
        // calculate the total amount of silver and gold books when acquired state variables are changed
        let spareBrownBooks = brownBooksAcquired > BROWN_BOOKS_REQUIRED ? brownBooksAcquired - BROWN_BOOKS_REQUIRED : 0;
        let silverBooks = silverBooksAcquired + Math.floor(spareBrownBooks / 3);
        let spareSilverBooks = silverBooks > SILVER_BOOKS_REQUIRED ? silverBooks - SILVER_BOOKS_REQUIRED : 0;
        let goldBooks = goldBooksAcquired + Math.floor(spareSilverBooks / 3);

        setTotalGoldBooks(goldBooks);
        setTotalSilverBooks(silverBooks);
    }

    return (
        <Container>
            <Row className="justify-content-center mb-3">
                {/* Input for gold books */}
                <MaterialInputBox
                    value={goldBooksAcquired}
                    setValue={setGoldBooksAcquired}
                />

                {/* Input for silver books */}
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
            <Row className="justify-content-center mb-3">
                You have a total of {totalGoldBooks} gold books.
            </Row>
            {totalGoldBooks < GOLD_BOOKS_REQUIRED &&
                <>
                    <Row className="justify-content-center">
                        You need {GOLD_BOOKS_REQUIRED - totalGoldBooks} more gold books
                    </Row>
                    {/* <Row className="justify-content-center">
                        -OR-
                    </Row>
                    <Row className="justify-content-center">
                        {(GOLD_BOOKS_REQUIRED - totalGoldBooks) * 3} more silver books
                    </Row>
                    <Row className="justify-content-center">
                        -OR-
                    </Row>
                    <Row className="justify-content-center">
                        {(GOLD_BOOKS_REQUIRED - totalGoldBooks) * 9} more brown books
                    </Row> */}
                </>
            }
        </Container>
    );
}

export default TalentMatTracker;