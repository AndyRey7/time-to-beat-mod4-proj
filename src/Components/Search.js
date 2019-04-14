import React from 'react'

const Search = (props) => {
    return (
    <div className="ui menu">
      <div className="right item">
        <div className="ui input">
          <input onChange={props.handleSearchChange} name="searchTerm" placeholder="Search..." value={props.search}/>
          <i className="search icon"></i>
        </div>
      </div>
    </div>
    )
}

export default Search
