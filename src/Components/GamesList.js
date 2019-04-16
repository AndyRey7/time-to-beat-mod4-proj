import React from 'react'
import Game from './Game'

const GamesList = (props) => {

//console.log('props in gameslist', props)
const gameData = props.games.map(game => <Game handleMoreInfo={props.handleMoreInfo} handleClick={props.handleClick} key={game.id} game={game} />)

    let font = {
        fontFamily: "Times New Roman",
        color: '#4ABDAC'
    }

    return (
        <div>
        <h2 style={font}>Games</h2>
        {gameData}
        </div>
    )
}

export default GamesList
