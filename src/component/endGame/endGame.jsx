import React, {useState} from 'react'

function EndGame({note}) {

    return (
        <div>
            <h1>Bravo vous venez de finir</h1>
            <h2>Vous avez obtenu {note} / 20 </h2>
        </div>
    )

}

export default EndGame