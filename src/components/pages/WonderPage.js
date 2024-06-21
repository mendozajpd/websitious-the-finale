import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

// IMAGES
import banaue1 from "../../assets/images/banaue1.png";
import banaue2 from "../../assets/images/banaue2.jpeg";
import puerto1 from "../../assets/images/puerto1.png";
import puerto2 from "../../assets/images/puerto2.png";
import chocolate1 from "../../assets/images/chocolate1.png";
import chocolate2 from "../../assets/images/chocolate2.png";
import tubattaha1 from "../../assets/images/tubattaha1.jpg";
import tubattaha2 from "../../assets/images/tubattaha2.jpg";
import mayon1 from "../../assets/images/mayon1.png";
import mayon2 from "../../assets/images/mayon2.png";
import boracay1 from "../../assets/images/boracay1.png";
import boracay2 from "../../assets/images/boracay2.png";
import coron1 from "../../assets/images/coron1.png";
import coron2 from "../../assets/images/coron2.png";

// UI
import CarouselComponent from "../ui/CarouselComponent";

const WonderPage = () => {

    const { id } = useParams();

    const cards = [
        {
            id: 1,
            image: banaue1,
            image2: banaue2,
            title: 'Banaue Rice Terraces',
            quote: '   "The Banaue Rice Terraces are a testament to the ingenuity and resilience of the Ifugao people. Carved into the mountains of Ifugao in the Philippines over 2,000 years ago, these terraces stand as a living monument to sustainable agriculture and cultural heritage."',
            text: '     The Banaue Rice Terraces, often called the "Eighth Wonder of the World," are a remarkable feat of engineering and a testament to the rich cultural heritage of the Ifugao people in the Philippines. Carved into the mountains over 2,000 years ago using minimal tools, these terraces reflect the sophisticated agricultural practices and deep respect for nature held by the Ifugao people. Featuring an intricate irrigation system sourced from the rainforests above, the terraces ensure a consistent water supply for the sustainable cultivation of rice and vegetables.',
            link: 'https://en.wikipedia.org/wiki/Banaue_Rice_Terraces'
        },
        {
            id: 2,
            image: puerto1,
            image2: puerto2,
            title: 'Puerto Princesa Subterranean River',
            quote: `"The Puerto Princesa Subterranean River, a natural wonder of Palawan, is a breathtaking journey through an underground world where majestic rock formations and crystal-clear waters reveal the Earth's hidden beauty."`,
            text: '     The Puerto Princesa Subterranean River, located in Palawan, Philippines, is a mesmerizing natural wonder that takes visitors on a captivating journey through an underground realm of stunning beauty. Carved out by the flowing waters over millions of years, the river winds its way through a network of limestone caves adorned with intricate stalactites and stalagmites, creating an otherworldly landscape that captivates the imagination. As visitors glide along its pristine waters on guided boat tours, they are treated to an unforgettable experience, marveling at the towering rock formations and the eerie yet enchanting ambiance of the underground river.',
            link: 'https://en.wikipedia.org/wiki/Puerto_Princesa_Subterranean_River_National_Park'
        },
        {
            id: 3,
            image: chocolate1,
            image2: chocolate2,
            title: 'Chocolate Hills',
            quote: '"The Chocolate Hills are a geological formation in the Bohol province of the Philippines. They are covered in green grass that turns brown during the dry season, hence the name."',
            text: '     The Chocolate Hills, located in Bohol, Philippines, are renowned for their unique geological formation comprising over 1,200 to 1,776 conical hills spread across more than 50 square kilometers. These hills, which turn from green to brown during the dry season, resemble chocolate mounds, giving them their name. As a major tourist attraction and a declared National Geological Monument, the Chocolate Hills are also steeped in local legends and folklore, enhancing their cultural and natural significance.',
            link: 'https://en.wikipedia.org/wiki/Chocolate_Hills'
        },
        {
            id: 4,
            image: tubattaha1,
            image2: tubattaha2,
            title: 'Tubbataha Reef',
            quote: '"Tubbataha Reefs Natural Park is a UNESCO World Heritage Site in the Philippines, celebrated for its extraordinary marine biodiversity and pristine coral reefs, making it a diver’s paradise and a critical habitat for numerous marine species."',
            text: '    Tubbataha Reef, located in the Sulu Sea of the Philippines, is renowned for its stunning marine biodiversity and pristine coral reefs. It is a UNESCO World Heritage Site and one of the top diving destinations in the world, home to a wide variety of marine life including over 600 species of fish, 360 species of coral, and numerous species of sharks, dolphins, and sea turtles. The reef is also a vital habitat for seabirds and is known for its crystal-clear waters and vibrant underwater landscapes. Its ecological significance and natural beauty make it a critical conservation area and a must-visit for diving enthusiasts.',
            link: 'https://en.wikipedia.org/wiki/Tubbataha_Reef'
        },
        {
            id: 5,
            image: mayon1,
            image2: mayon2,
            title: 'Mayon Volcano',
            quote: '"Mayon Volcano, known for its almost perfect conical shape, is one of the most active and iconic volcanoes in the Philippines, captivating both scientists and tourists with its majestic beauty and frequent eruptions."',
            text: `     Mayon Volcano, located in the Bicol region of the Philippines, is renowned for its nearly perfect conical shape and is often cited as the world's most symmetrical volcano. It is one of the most active volcanoes in the Philippines, with frequent eruptions that have shaped its iconic profile over centuries. The volcano's majestic beauty and dramatic eruptions attract tourists, photographers, and volcanologists from around the globe, making it a significant cultural and natural landmark in the country.`,
            link: 'https://en.wikipedia.org/wiki/Mayon'
        },
        {
            id: 6,
            image: boracay1,
            image2: boracay2,
            title: 'Boracay Island',
            quote: `"Boracay Island, with its powdery white sand beaches, crystal-clear waters, and vibrant nightlife, is a tropical paradise and one of the Philippines' most famous and beloved tourist destinations."`,
            text: '     Boracay Island, located in the Western Visayas region of the Philippines, is renowned for its stunning white sand beaches, particularly White Beach, which stretches for about four kilometers. The island is famous for its crystal-clear turquoise waters, vibrant nightlife, and a wide range of water sports and recreational activities such as snorkeling, scuba diving, and kite surfing. Boracay is also known for its luxurious resorts, diverse dining options, and beautiful sunsets, making it a premier destination for both relaxation and adventure.',
            link: 'https://en.wikipedia.org/wiki/Boracay'
        },
        {
            id: 7,
            image: coron1,
            image2: coron2,
            title: 'Coron Island',
            quote: '"Coron Island in the Philippines is a paradise of towering limestone cliffs, crystal-clear lagoons, and vibrant marine life, offering an awe-inspiring glimpse into untouched natural beauty."',
            text: `     Coron Island, part of the Calamian Group in the Philippines, is celebrated for its dramatic limestone cliffs, crystal-clear lakes, and vibrant marine life. It is renowned for its stunning karst formations, including the iconic Twin Lagoon and Kayangan Lake, which offer visitors breathtaking views and opportunities for swimming and snorkeling in turquoise waters. The island's reputation as a world-class diving destination is enhanced by its numerous World War II shipwrecks, attracting divers from around the globe. With pristine beaches like Banol Beach and a rich indigenous culture maintained by Tagbanua communities, Coron Island combines natural beauty with cultural significance, making it a premier destination for adventure and relaxation alike.`,
            link: 'https://en.wikipedia.org/wiki/Coron_Island'
        },
    ];

    return (
        <Container className="g-0 h-75">
            <Col className="h-100 flex-column d-flex justify-content-between">
                <Row className="m-5">
                    <Col style={{ height: '500px', width: '500px' }}>
                        <CarouselComponent card={cards[id - 1]} />
                    </Col>
                    <Col>
                        <h1 className='pb-2'>
                            {cards[id - 1].title}
                        </h1>
                        <h6 className="p-2">
                            {cards[id - 1].quote}
                        </h6>
                        <p>{cards[id - 1].text}</p>
                        <div className="d-flex justify-content-end">
                                <Link to={cards[id - 1].link} className="mt-5 px-4 p-2 pill border-black noDecoration clickable">
                                    <strong>
                                        READ MORE
                                    </strong>
                                </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="d-flex justify-content-center p-5 border-top-black ">
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