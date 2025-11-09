import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Recomendation from '../components/Recomendation'
import Title from '../components/Title'
import { DestinationContext } from '../context'



export default function Destinationdescription() {
    const id = useParams();
    const destination_id = Number(id.id);
    const context = useContext(DestinationContext);
    const { getDestination, destinations } = context;

    const destination = getDestination(destination_id);

    const detail_desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';

    if (!destination) {
        return (
            <Title title='cant find room' />
        )
    }
    const { name, image, description, type, daystovisit, ratings, extras } = destination;

    const tempDestinations = destinations.filter(destination => destination.type === type && destination.name !== name);


    return (
        <>
            {/* <Title title={name} /> */}
            <Container className='mt-5'>
                <Row  >
                    <Col>
                        <div className='destination_image'>
                            <img src={image} alt={name} />
                        </div>
                    </Col>
                    <Col>
                        <div className='destination_description'>
                            <h3>{name}</h3>
                            {/* <p className='dest_desc'>{description}</p> */}
                            <div className='more_desc_conatiner'>
                            <p>{detail_desc}</p>
                            </div>
                            <button className='dropshadow'><i class="fa-solid fa-map-pin"></i> {type} </button>
                            <button className='dropshadow'><i class="fa-solid fa-calendar-day"></i>  {daystovisit}days </button>
                            {/* <p>More <i class="fa-solid fa-angles-right"></i></p>
                            <ul>
                                {
                                    extras.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })
                                }
                            </ul> */}
                            <button className='dropshadow'><i class="fa-solid fa-star"></i>'s:  {ratings}/5</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Recomendation destinations={tempDestinations} />
        </>
    )
}

