
import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import { DestinationContext } from '../context'
import Destination from './Destination'
import Title from './Title'

export default class TopDestination extends Component {
  static contextType = DestinationContext
  render() {
    let { topDestinations: destinations } = this.context;

    destinations = destinations.map(destination => {
      return <Destination key={destination.id} destination={destination} />
    })


    return (
      <>
        <Title title="top destinations" />
        <Container className='mid_container'>
            <Row className='gx-0 center'>
              {destinations}
              </Row>
        </Container>
      </>
    )
  }
}