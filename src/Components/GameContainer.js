import React from 'react'
import GamesList from './GamesList'
import Filter from './Filter'

export default class GameContainer extends React.Component {

        state = {
            category: 'All'
        }

        filteredGameList = () => {
            if (this.state.category === 'All') {
                return this.props.games
            } else {
                return this.props.games.filter(game => game.genre === this.state.category)
            }
        }

        handleFilterChange = (e) => {
            this.setState({
                category: e.target.value
            })
        }



    render() {
        return (
            <div>
            <Filter handleFilterChange={this.handleFilterChange} />
            <div id="container-for-games">
                <GamesList games={this.filteredGameList()}  handleClick={this.props.handleClick} />
            </div>
            </div>
        )
    }
}
