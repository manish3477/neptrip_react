import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Destination from './Destination'
import Title from './Title'


export default function Recomendation(destinations) {

    console.log('recomended destinations from recomendation component:',destinations.destinations)
    //console.log(desttype,destname)
   //console.log(destinations)
  const tempdata = destinations.destinations;
    console.log(tempdata)

  return (
    <>
    <Title title="similar destinations:"/>
    <Container className='my-5'>
      <Row className='gx-0 center'>
       {
           tempdata.map((item)=>{
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
