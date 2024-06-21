import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

const HomePage = () => {

    return (
        <Container className="g-0 h-100">
            <Col className="h-100 text-white flex-column d-flex justify-content-between">
                <Row className="pt-5">
                    <p className="display-10 d-flex justify-content-center noWrap">
                        <div className="border-bot pt-5 pb-2 p-3">
                            The New Seven Wonders of the World were selected through a global poll conducted by the New 7 Wonders Foundation.
                        </div>
                    </p>
                </Row>
                <Row className="pb-10">
                        <div className="display-3">
                            THE 7 WONDERS
                        </div>
                        <div className="display-3">
                            OF THE
                        </div>
                        <div className="display-3">
                            PHILIPPINES
                        </div>
                </Row>
                <Row className="pb-10">
                    <div className="d-flex justify-content-center p-5">
                        <Button className="pill px-4" variant="light">
                            <strong>
                                E X P L O R E
                            </strong>
                        </Button>
                    </div>
                </Row>
            </Col>
        </Container >
    );
}

export default HomePage;