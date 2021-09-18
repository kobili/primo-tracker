import 'bootstrap/dist/css/bootstrap.min.css';
import './MaterialInputBox.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MaterialInputBox({value, setValue}) {

    const inputBoxStyle = {
        width: "65px",
        height: "65px",
        fontSize: "20px",
        textAlign: "center"
    };

    const buttonStyle = {
        height: "65px"
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
                        type="number"
                        onChange={(e) => setValue(isNaN(e.target.value) ? value : parseInt(e.target.value))}
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