import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Col, ListGroup, ListGroupItem, Row } from "reactstrap";

function App() {
    const [measurment, SetMeasurment] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get("http://localhost:5241/api/Measurment/Get").then((result) => {
                SetMeasurment(result.data);
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Card className="md m-5 p-2 w-50">
            <CardTitle>
                <h3>Данные с датчика</h3>
            </CardTitle>
            <CardBody>
                <Row>
                    <Col>
                        <Card className="">
                            <CardTitle className="p-1 m-1">
                                <h5>Accelearte</h5>
                            </CardTitle>
                            <ListGroup className="m-1">
                                <ListGroupItem>X = {measurment?.aX}</ListGroupItem>
                                <ListGroupItem>Y = {measurment?.aY}</ListGroupItem>
                                <ListGroupItem>Z = {measurment?.aZ}</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="">
                            <CardTitle className="p-1 m-1">
                                <h5>Temperature</h5>
                            </CardTitle>
                            <ListGroup className="m-1">
                                <ListGroupItem>T = {measurment?.tmp}</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="">
                            <CardTitle className="p-1 m-1">
                                <h5>Giroscope</h5>
                            </CardTitle>
                            <ListGroup className="m-1">
                                <ListGroupItem>X = {measurment?.gX}</ListGroupItem>
                                <ListGroupItem>Y = {measurment?.gY}</ListGroupItem>
                                <ListGroupItem>Z = {measurment?.gZ}</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default App;
