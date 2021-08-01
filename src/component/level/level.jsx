import React, {useState} from 'react'
import Timer from '../../../node_modules/react-compound-timer'
import sendList from './list'
import sendRep from './rep'
import EndGame from '../endGame/endGame'
import './level.css'
import sendListName from './nameList'


function Level({level, chrono}) {

    let actualList = sendList(level)
    let rep = sendRep(level)

    let title = sendListName(level)

    const [reponse, setReponse ] = useState(null)
    const [firstReponse, setFirstReponse] = useState(null)
    const [note, setNote] = useState(0)
    const[canClick, setCanClick] = useState(false)
    const [endGame, setEndGame] = useState(false)
    const [tour, setTour] = useState(0)


    function firstClick(e, item, reponse) {
        if (!canClick)
        {
            if(e.target.style.background === 'red' || e.target.style.background === 'green' || e.target.style.background === 'grey' ){
                setCanClick(false)
            }
            else {
                e.target.style.background="grey"
                setFirstReponse(e)
                setReponse(reponse)
                setCanClick(true)
            }

        }
    }

    function secondClick(e, item) {
        
        if(canClick){
                if (item === reponse) {
                    e.target.style.background='green'
                    e.target.style.color='white'
                    firstReponse.target.style.background='green'
                    firstReponse.target.style.color='white'
                    setNote(note + 1)
                    setCanClick(false)
                    setTour(tour +1 )
                }
                else {
                    firstReponse.target.style.background='red'
                    e.target.style.background='red'
                    firstReponse.target.style.color='white'
                    e.target.style.color='white'
                    setCanClick(false)
                    setTour(tour +1 )
                }
        }
    }



    if (endGame || tour === 20){
        return (
            <>
                <EndGame note={note} />
            </>
        )
    }

    return (
        <div>
            <h2 >{title}</h2>
            <button className="time button">
                <span>Il vous reste </span>
                <Timer
                        initialTime={chrono}
                        direction="backward"
                        checkpoints={[
                            {
                                time: 0,
                                callback: () => setEndGame(true)
                            }
                        ]}
                    >
                        {() => (
                            <React.Fragment>
                                <Timer.Minutes/>: 
                                <Timer.Seconds/>
                            </React.Fragment>
                        )}
                    </Timer>
            </button>

            <div className="listContainer">
                <div className="list">
                    {actualList.map( item => <button onClick={(e) => firstClick(e, item[0], item[1])} className="square" key={item[0]} >{item[0]}</button> )}
                </div>
                <div className="list">
                    {rep.map( item => <button  onClick={(e) => secondClick(e, item[0])}  className="square" key={item[0]} >{item[0]}</button>)}
                </div>
            </div>

        </div>
    );
  }
  
  export default Level;
  