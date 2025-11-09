import React from 'react'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
//import janakpur from '../images/janakpur.jpg';

export default function Destination({ destination }) {

  const {name, id ,image, description } = destination;
  return (
    <>
    <Card className='dropshadow' style={{ width: '20rem', margin:'1rem'}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Link to={`/destination/${id}`} variant="primary"><i class="fa-solid fa-eye"></i> View More</Link>
      </Card.Body>
    </Card>
    </>
  )
}
