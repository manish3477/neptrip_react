import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Recomendation from '../components/Recomendation'
import Title from '../components/Title'
import { DestinationContext } from '../context'



export default function Destinationdescription() {
    const id = useParams();
    const destination_id = Number(id.id);
    const context = useContext(DestinationContext);
    const  { getDestination, destinations }  = context;
 
    const destination =  getDestination(destination_id);
    
    if(!destination){
        return(
            <Title title='cant find room'/>
        )
    }
    const {name, image, description, type, daystovisit, ratings, extras} = destination;

    const tempDestinations = destinations.filter(destination => destination.type === type && destination.name !== name);
    
      
    return (
        <>
        <Title title={name}/>
        <div className='description_desc_container'>
        <div className='destination_image'>
        <img src={image} alt={name}/>
        </div>
        <div className='destination_description'>
            <p>{description}</p>
            <p>type: {type} </p>
            <p>days to visit: {daystovisit} </p>
            <p>extras:</p>
            <ul>
                {
                    extras.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
}
            </ul>
            <p>ratings: {ratings}/5</p>
        </div>
        </div>
        <Recomendation destinations={tempDestinations}/>
        </>
    )
  }

