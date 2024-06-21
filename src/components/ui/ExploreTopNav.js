import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


// IMAGES
import banaue from "../../assets/images/banaue.png";
import puerto from "../../assets/images/puerto.png";
import chocolate from "../../assets/images/chocolate.png";
import reef from "../../assets/images/reef.png";
import mayon from "../../assets/images/mayon.png";
import boracay from "../../assets/images/boracay.png";
import coron from "../../assets/images/coron.png";


const ExploreTopNav = () => {
    const { id } = useParams();

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

    const card = cards.find(card => card.id === Number(id));

    return (
        <div className="p-5 explore-top-nav">
            <strong className='d-flex align-items-center'>
                <Breadcrumb className=''>
                    <Breadcrumb.Item href="/explore">Home</Breadcrumb.Item>
                    {id && (
                        <Breadcrumb.Item href={`/explore/${id}`}>
                            {card ? card.text : 'Not found'}
                        </Breadcrumb.Item>
                    )}
                </Breadcrumb>
            </strong>
        </div>
    )
}

export default ExploreTopNav;