import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Galleryconatiner from '../components/Galleryconatiner'

export default function Gallery() {
  return (
    <>
      <Container>
        <Row className='center'>
          <Col>
          <div className='image_search'>
          <input type='text' placeholder='search your image'/>
          <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          </Col>
          <Col>
          <p className='image_upload'>
          upload image and win exiciting gifts every week !
          </p>
            
          </Col>
        </Row>
      </Container>
      <Galleryconatiner />
      <br></br>
      <Galleryconatiner />
    </>
  )
}
