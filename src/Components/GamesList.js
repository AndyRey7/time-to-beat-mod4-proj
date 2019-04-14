import React from 'react'
import Game from './Game'

const GamesList = (props) => {

//console.log('props in gameslist', props)
const gameData = props.games.map(game => <Game handleMoreInfo={props.handleMoreInfo} handleClick={props.handleClick} key={game.id} game={game} />)

    return (
        <div>
        <h2>Games</h2>
        {gameData}
        </div>
    )
}

export default GamesList
