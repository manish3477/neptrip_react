import React from 'react'
import { withDestinationConsumer } from '../context'
import DestinationFilter from './DestinationFilter'
import DestinationList from './DestinationList'

 function DestinationContainer({context}) {
   const {sortedDestinations, destinations} = context;
  return (
    <>
    <DestinationFilter destinations={destinations}/>
    <DestinationList destinations={sortedDestinations}/>
    </>
  )
}

export default withDestinationConsumer(DestinationContainer)