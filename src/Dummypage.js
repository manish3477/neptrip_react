import React from 'react'
import items from './data'

export default function Dummypage() {
  return (
    <div>
        {
            items.map(item =>(
                <>
                <h1>{item.name}</h1>
                <p>{item.ratings}</p>
                </>
            ))
        }
    </div>
  )
}
