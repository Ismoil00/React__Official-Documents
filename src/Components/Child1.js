import React from 'react'

function Child1({increase}) {

    console.log("Child")

  return (
    <button onClick={increase}>
        increase
    </button>
  )
}

export default Child1