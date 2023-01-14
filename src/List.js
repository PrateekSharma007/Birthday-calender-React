
import React from 'react'
import Data from './Data'

export default function List(props) {
  return (
    <div className="details">
        <div className="left"><img src= {props.peeps.image} alt="" /></div>
        <div className="right">
            <h3>Name : {props.peeps.name}</h3>
            <h3>Age : {props.peeps.age} years</h3>
             
        </div>
    </div>
  )
}
