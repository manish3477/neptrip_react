import React from 'react'
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
    <Title title="recomended destinations"/>
    <div className='destination_container'>
       {
           tempdata.map((item)=>{
               return(
                   <>
                   <Destination key={item.id} destination={item}/>
                   </>
               )
           })
       }
    </div>
    </>
  )
}
