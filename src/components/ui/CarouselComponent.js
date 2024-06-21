import { Carousel } from "react-bootstrap";

const CarouselComponent = ({ card }) => {
    return (
        <Carousel style={{minWidth: '500px'}}>
            <Carousel.Item key={card.id}>
                <img
                    className="d-block w-100"
                    src={card.image}
                    alt="First slide"
                    style={{ height: '500px' }}
                />
                <Carousel.Caption>
                    {/* <h3>{card.title}</h3> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item key={card.id + 20}>
                <img
                    className="d-block w-100"
                    src={card.image2}
                    alt="First slide"

                    style={{ height: '500px' }}
                />
                <Carousel.Caption>
                    {/* <h3>{card.title}</h3> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;