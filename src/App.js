import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import GameContainer from './Components/GameContainer.js'
import BeatenGames from './Components/BeatenGames.js'
import Form from './Components/Form'


class App extends Component {

    state = {
        games: [],
        beatenGames: [],
        searchTerm: ''
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/games')
        .then(res => res.json())
        .then(data => {
            this.setState({
                games: data
            })
        })
    }

    handleAdd = (game) => {
        //console.log('yoyoyyo', game)
        this.setState({
            beatenGames: [game, ...this.state.beatenGames]
        })
    }

    handleDelete = (game) => {
        const newArrayofBeatenGames = this.state.beatenGames.filter(g => g.id !== game.id)
        this.setState({
            beatenGames: newArrayofBeatenGames
        })
    }

    addNewGameToList = (e, newGame) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/games', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newGame)
        })
        .then(res => res.json())
        .then(this.setState({games: [newGame, ...this.state.games]}))
    }

    handleSearchChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }



  render() {
    return (
      <div className="App">
      <div className="ui menu">
        <div className="right item">
          <div className="ui input">
            <input value={this.state.searchTerm}
            onChange={this.handleSearchChange}
            placeholder="Search by game title..."
            />
            <i className="search icon" id="magic"></i>
          </div>
        </div>
      </div>

        <Form addNewGameToList={this.addNewGameToList} />

        <GameContainer games={this.state.games.filter(game =>
          game.title.toLowerCase().includes(this.state.searchTerm)
        )} handleClick={this.handleAdd}
        />

        <BeatenGames games={this.state.beatenGames} handleClick={this.handleDelete}/>

      </div>
    );
  }
}

export default App;
