 import React from 'react'
import { arrayOf } from 'prop-types';

const emptymessage=()=>{
    return(
        <p>empty list</p>
    )
 }
 const gamelist=()=>{
     return(
         <h1>hhhhh</h1>
     )
 }
 const GamesList=({Games})=> {
     
        
     
    return (
        <div>
        {Games.length===0 ? emptymessage : gamelist}
        </div>
    )
      
}

GamesList.PropTypes={
    Games:React.PropTypes.arrayOf
}
 
export default GamesList

