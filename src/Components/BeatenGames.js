import React from 'react'
import Game from './Game.js'

export default class BeatenGames extends React.Component {



    gamesCompleted = () => {
        return this.props.games.filter((k,v) => this.props.games.indexOf(k) === v).map(game => <Game game={game} handleClick={this.props.handleClick} />)
    }
    render() {
        let divStyle = {
            paddingLeft: '700px',
            paddingTop: '220px'
        }

        let divStyle1 = {
            fontFamily: "Times New Roman",
            color: '#4ABDAC'
        }
        return (
            <div style={divStyle}>
            <h2 style={divStyle1}>Completed</h2>
            {this.gamesCompleted()}
            </div>
        )
    }
}
