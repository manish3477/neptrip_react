import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Title({title}) {
  return (
    <>
    <Container>
      <Row className='my-5'>
    <h3>{title}</h3>
    </Row>
    </Container>
    </>
  )
}
