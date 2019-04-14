import React, { Component } from 'react';

const Filter = (props) => {
  return (
    <div className="game-filter">
    Filter By Genre
    <i class="filter icon"></i>
      <select onChange={props.handleFilterChange}>
        <option value="All">All</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="RPG">RPG</option>
        <option value="MMORPG">MMO</option>
        <option value="Platformer">Platformer</option>
        <option value="Sports">Sports</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Indie">Indie</option>
        <option value="Shooter">Shooter</option>
      </select>
    </div>
  )
}

export default Filter
