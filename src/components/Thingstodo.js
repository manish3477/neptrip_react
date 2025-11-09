import React from 'react'
import Title from './Title'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import mountain from '../thingstodo_img/mountain.jpg'
import adventure from '../thingstodo_img/adventure.jpg'
import culture from '../thingstodo_img/culture.jpg'
import wildlife from '../thingstodo_img/wildlife.jpg'
import nature from '../thingstodo_img/nature.jpg'
import { Container } from 'react-bootstrap';

export default function Thingstodo() {
   const data = `That god forbid, that made me first your slave,
   I should in thought control your times of pleasure, 
   Or at your hand the account of hours to crave, Being your vassal,
    bound to stay your leisure! O! let me suffer, being at your beck, 
    The imprison'd absence of your liberty; And patience, tame to sufferance,
     bide each check, Without accusing you of injury. Be where you list, your 
     charter is so strong That you yourself may privilage your time`;
  return (
    <>
    <Title title='things to do'/>
    <Container>
     <Tabs
      defaultActiveKey="adventure"
      // id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="mountain" title="Mountain Climbing">
        <div className='tabcontainer'>
          <div>
            <img src={mountain} alt="image1"/>
          </div>
          <div>
            <p>
            {data}
            </p>
          </div>
          </div>
      </Tab>
      <Tab eventKey="adventure" title="Adventure">
      <div className='tabcontainer'>
          <div>
            <img src={adventure} alt="image1"/>
          </div>
          <div>
          <p>
            {data}
            </p>
          </div>
          </div>
      </Tab>
      <Tab eventKey="culture" title="Culture and People">
      <div className='tabcontainer'>
          <div>
            <img src={culture} alt="image1"/>
          </div>
          <div>
          <p>
            {data}
            </p>
          </div>
          </div>
      </Tab>
      <Tab eventKey="nature" title="Relax and Nature">
      <div className='tabcontainer'>
          <div>
            <img src={nature} alt="image1"/>
          </div>
          <div>
          <p>
            {data}
            </p>
          </div>
          </div>
      </Tab>
      <Tab eventKey="wildlife" title="Wildlife Safari">
      <div className='tabcontainer'>
          <div>
            <img src={wildlife} alt="image1"/>
          </div>
          <div>
          <p>
            {data}
            </p>
          </div>
          </div>
      </Tab>
    </Tabs>
   
    </Container>
    </>
  )
}
