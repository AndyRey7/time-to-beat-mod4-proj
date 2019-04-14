import React from 'react'
import Game from './Game.js'

export default class BeatenGames extends React.Component {

    gamesCompleted = () => {
        return this.props.games.filter((v,i) => this.props.games.indexOf(v) === i).map(game => <Game game={game} handleClick={this.props.handleClick} />)
    }
    render() {
        return (
            <div>
            <h2>Completed</h2>
            {this.gamesCompleted()}
            </div>
        )
    }
}
