import React from 'react'

const Game = (props) => {
    return (
        <div className="ui card four wide column">
          <span className="image" href="#">
            <img src={props.game.imgURL} alt={props.game.title}/>
          </span>
          <div className="content">
            <span className="header">{props.game.title}</span>
            <div className="meta">
              <span>Hours taken to beat:{props.game.hours}</span>
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
