import React from 'react'
import { Container,Row } from 'react-bootstrap'

export default function Banner({title, subtitle,children}) {
  return (
    <Container>
      <Row> 
       <h1>{title}</h1>
       <p>{subtitle}</p>
       {children}
       
       </Row>
    </Container>
  )
}
