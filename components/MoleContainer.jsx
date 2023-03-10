import React, {useState} from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer (){
    let [displayMole, setdisplayMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    let displayMole = displayMole 
    ? <Mole setScore = {props.setScore} toggle = {setdisplayMole} handleClick = {handleClick} />
    : <EmptySlot toggle = {setdisplayMole} />

    return (
        <div style = {{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer 