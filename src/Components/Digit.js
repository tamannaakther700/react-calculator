import React from 'react'

export default function Digit(prop) {

  return (

    <button name={prop.digit} onClick={prop.dispatch}>
    {prop.digit}
    </button>


  )
  
}
