import React from 'react'

const Game = (props) => {
    return (
        <div className="ui card four wide column">
          <a className="image" href="#">
            <img src={props.game.imgURL} alt={props.game.title}/>
          </a>
          <div className="content">
            <a className="header" href="#">{props.game.title}</a>
            <div className="meta">
              <a>Hours taken to beat:{props.game.hours}</a>
            </div>
          </div>
            <div onClick={() => props.handleClick(props.game)} className="ui animated fade button" tabIndex="0">
                <div className="visible content">Click to...</div>
                <div className="hidden content">Add/Remove</div>
            </div>
        </div>
    )
}

export default Game
