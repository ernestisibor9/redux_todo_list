import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Item2() {
    const changeName = useSelector(store=>store)
    const changePlayerName = useSelector(store => store)
    const changeUserName = useSelector(store => store)
    const dispatch = useDispatch()
    const[gamename, setGamename] = useState('')
    const[playername, setPlayername] = useState('')
    const[username, setUsername] = useState('')

    const changeGame = ()=>{
       dispatch({type: "CHANGE_NAME", payload: gamename})
    }
    const changePlayer = ()=>{
        dispatch({type: "CHANGE_PLAYER", payload: playername})
    }
    const changeUsername = ()=>{
        const users= {
            username: "Alexandra",
            age: 30,
            job: "Web Developer"
        }
        dispatch({type: "CHANGE_USERNAME", payload: users})
    }

  return (
    <div>
        <h1>The name of the game is {changeName.game}</h1>
        <h1>The name of the player is {changePlayerName.playerName}</h1>
        <h1>The name of the player is {changeUserName.userName}</h1>
        <input type='text' placeholder = "Enter game name" value= {gamename} onChange={(e)=>setGamename(e.target.value)} /> 
        <button onClick={changeGame} className = "btn btn-primary">Change Name</button> <br></br><br></br>
        <input type='text' placeholder = "Enter player name" value= {playername} onChange={(e)=>setPlayername(e.target.value)} /> 
        <button onClick={changePlayer} className = "btn btn-primary">Change Player Name</button>
        <br></br><br></br>
        <input type='text' placeholder = "Enter username" value= {username} onChange={(e)=>setUsername(e.target.value)} /> 
        <button onClick={changeUsername} className = "btn btn-primary">Change UserName</button>
    </div>
  )
}

export default Item2