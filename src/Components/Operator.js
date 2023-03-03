import React from 'react'

export default function Operator(prop) {
  return (

    <button name={prop.operator} onClick={prop.dispatch}>
    {prop.operator}
    </button>


  )
  
}
