import React from 'react'
import Destination from './Destination'
import Banner from './Banner'
import { Container, Row } from 'react-bootstrap'


export default function DestinationList({destinations}) {
  if(destinations.length === 0){
    return(
      <Banner title="Sorry!" subtitle="unfortunately no destination avilable for your search parameter"/>
    )
  }
  return (
    <>
    <Container>
      <Row className='gx-0 my-5 center'>
      {
        destinations.map((item) => {
          return(
            <>
            <Destination key={item.id} destination={item}/>
            </> 
            )
        })
      }  
      </Row>
      </Container>
      </>   
  )
}
