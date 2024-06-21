import React from "react";
import { Container, Col, Row, Button, Card } from "react-bootstrap";

// IMAGES
import banaue from "../../assets/images/banaue.png";
import puerto from "../../assets/images/puerto.png";
import chocolate from "../../assets/images/chocolate.png";
import reef from "../../assets/images/reef.png";
import mayon  from "../../assets/images/mayon.png";
import boracay  from "../../assets/images/boracay.png";
import coron  from "../../assets/images/coron.png";

const WonderPage = () => {

    const cards = [
        {
            id: 1,
            image: banaue,
            text: 'Banaue Rice Terraces'
        },
        {
            id: 2,
            image: puerto,
            text: 'Puerto Princesa Subterranean River'
        },
        {
            id: 3,
            image: chocolate,
            text: 'Chocolate Hills'
        },
        {
            id: 4,
            image: reef,
            text: 'Tubbataha Reef'
        },
        {
            id: 5,
            image: mayon,
            text: 'Mayon Volcano'
        },
        {
            id: 6,
            image: boracay,
            text: 'Boracay Island'
        },
        {
            id: 7,
            image: coron,
            text: 'Coron Island'
        },
    ];

    return (
        <Container className="g-0 h-75">
            <Col className="h-100 flex-column d-flex justify-content-between">
                <Row className="m-5">
                    WONDER PAGE
                </Row>
                <Row>
                    <div className="d-flex justify-content-center p-5 border-top-black">
                        <Button className="pill px-4" variant="light">
                            <strong>
                                ABOUT US
                            </strong>
                        </Button>
                        <Button className="pill px-4 mx-5" variant="light">
                            <strong>
                                CONTACT
                            </strong>
                        </Button>
                        <Button className="pill px-4" variant="light">
                            <strong>
                                PRIVACY POLICY
                            </strong>
                        </Button>
                    </div>
                </Row>
            </Col>
        </Container >
    );
}

export default WonderPage;