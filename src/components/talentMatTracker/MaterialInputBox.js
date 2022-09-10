import 'bootstrap/dist/css/bootstrap.min.css';
import './MaterialInputBox.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import BrownBookBackground from '../images/brown_book.png';
import SilverBookBackground from '../images/silver_book.png';
import GoldBookBackground from '../images/gold_book.png';


// type is one of: "gold", "silver", "brown"

function MaterialInputBox({value, setValue, type}) {

    const colors = {
        "gold": "#f2ca5a",
        "silver": "#5e5c57",
        "brown": "#634800"
    }

    const backgroundImages = {
        "gold": `url(${GoldBookBackground})`,
        "silver": `url(${SilverBookBackground})`,
        "brown": `url(${BrownBookBackground})`
    }

    const inputBoxStyle = {
        width: "65px",
        height: "65px",
        fontSize: "20px",
        textAlign: "center",
        boxShadow: `0 0 20px inset ${colors[type]}`
        // backgroundImage: backgroundImages[type]
    };

    const buttonStyle = {
        height: "65px",
        width: "36px"
    }

    return (
        <Col lg={2}>
            <Row>
                <div className="col-auto p-0">
                    <Button variant="primary"
                        style={buttonStyle}
                        onClick={() => setValue(value + 1)}>
                        +
                    </Button>
                </div>
                <div className="col-auto p-0">
                    <Form.Control
                        style={inputBoxStyle}
                        value={value}
                        min={0}
                        type="number"
                        onChange={(e) => setValue(parseInt(e.target.value))}
                    />
                </div>
                <div className="col-auto p-0">
                    <Button variant="primary"
                        style={buttonStyle}
                        onClick={() => setValue(value >= 1 ? value - 1 : 0)}>
                        -
                    </Button>
                </div>
            </Row>
        </Col>
    );
}

export default MaterialInputBox;