import React from 'react'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
//import janakpur from '../images/janakpur.jpg';

export default function Destination({ destination }) {

  const {name, id ,image, description } = destination;
  return (
    <>
    <Card style={{ width: '20rem'}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <button className='cardbtn'><Link to={`/destination/${id}`} variant="primary">view more</Link></button>
      </Card.Body>
    </Card>
    </>
  )
}
