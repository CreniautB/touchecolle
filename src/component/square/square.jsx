import React from 'react'
import './square.css'

function Square( {name, getAnswer} )  {

    return ( 
        <div className="square" onClick={(e) => getAnswer(name, e)} >
             {name}
        </div>
    )
}


export default Square

