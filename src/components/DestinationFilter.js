import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { DestinationContext } from '../context';

const getUnique = (items,value) =>{
  return [...new Set(items.map(item => item[value]))];
};


export default function DestinationFilter({destinations}) {

  const context = useContext(DestinationContext);
  const{
    handleChange,
    type,
    daystovisit,
    ratings,
    maxDaystovisit,
    minDaystovisit
  } = context;

  //get unique types

  let types = getUnique(destinations, "type");
  types = ["all",...types]
  types = types.map((item,index) =>(
    <option key={index} value={item}>
      {item}
    </option>
  ));
  function resetPage()  {
    window.location.reload();
  }
  return (
    <Container>
      <Row className='center test'>
        <Col>
            <div>
            <label htmlFor="rating">Top rated: </label>
            <input 
            type="checkbox"
            name="ratings"
            id='ratings'
            checked={ratings}
            onChange={handleChange}
            >
            </input>
            </div>
            </Col>
            <Col>
            <div>
            <label htmlFor="daystovisit">By days to visit: {daystovisit} </label>
            <input
             type="range"
             name="daystovisit"
              max={maxDaystovisit}
               min={minDaystovisit}
               id='daystovisit'
             value={daystovisit}
               onChange={handleChange}
                />
            </div>
            </Col>
            <Col>
            <div>
            <label htmlFor="type">By Types:</label>
            <select
             name="type" 
             id="type"
             onChange={handleChange}
             defaultValue={type}
             >
            {types}
            </select>
            </div>
            </Col>
            <Col>
            <div>
            <Button variant='outline-primary' onClick={resetPage}>Reset filter</Button>
            </div>
            </Col>
            </Row>
    </Container>
  )
}
