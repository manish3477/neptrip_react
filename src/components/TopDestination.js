
import React, { Component } from 'react'
import { DestinationContext } from '../context'
import Destination from './Destination'
import Title from './Title'

export default class  TopDestination extends Component {
  static contextType = DestinationContext
  render(){
    let { topDestinations: destinations } = this.context;
   
    destinations = destinations.map(destination =>{
      return <Destination key={destination.id} destination={destination}/>
    })

  
  return (
    <>
    <Title title="top destinations"/>
    <div className='destination_container'>
       {destinations}
    </div>
    </>
  )
}
}