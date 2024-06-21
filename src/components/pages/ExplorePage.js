import React from "react";
import { Container, Col, Row, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// IMAGES
import banaue from "../../assets/images/banaue.png";
import puerto from "../../assets/images/puerto.png";
import chocolate from "../../assets/images/chocolate.png";
import reef from "../../assets/images/reef.png";
import mayon  from "../../assets/images/mayon.png";
import boracay  from "../../assets/images/boracay.png";
import coron  from "../../assets/images/coron.png";

const ExplorePage = () => {

    const navigate = useNavigate();

    const cards = [
        {
            id: 1,
            image: banaue,
            image2: banaue,
            text: 'Banaue Rice Terraces'
        },
        {
            id: 2,
            image: puerto,
            image2: banaue,
            text: 'Puerto Princesa Subterranean River'
        },
        {
            id: 3,
            image: chocolate,
            image2: banaue,
            text: 'Chocolate Hills'
        },
        {
            id: 4,
            image: reef,
            image2: banaue,
            text: 'Tubbataha Reef'
        },
        {
            id: 5,
            image: mayon,
            image2: banaue,
            text: 'Mayon Volcano'
        },
        {
            id: 6,
            image: boracay,
            image2: banaue,
            text: 'Boracay Island'
        },
        {
            id: 7,
            image: coron,
            image2: banaue,
            text: 'Coron Island'
        },
    ];

    return (
        <Container className="g-0 h-75">
            <Col className="h-100 flex-column d-flex justify-content-between">
                <Row className="m-5">
                    {cards.map((card, index) => (
                        <Card key={index} className="explore-card d-flex" onClick={() => navigate(`${card.id}`)}>
                            <Card.Img variant="top" src={card.image} className="p-2" style={{ height: '13rem', width: '13rem' }} />
                            <Card.Body>
                                <Card.Text>
                                    <div className="display-10 text-center">
                                        {card.text}
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
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

export default ExplorePage;