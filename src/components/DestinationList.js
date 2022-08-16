import React from 'react'
import Destination from './Destination'
import Banner from './Banner'


export default function DestinationList({destinations}) {
  if(destinations.length === 0){
    return(
      <Banner title="Sorry!" subtitle="unfortunately no destination avilable for your search parameter"/>
    )
  }
  return (
    <div className='destination_container'>
      {
        destinations.map((item) => {
          return <Destination key={item.id} destination={item}/>
        })
      }     
    </div>
  )
}
