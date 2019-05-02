import React from 'react'

const Search = (props) => {
    let changeBGColor = {
        backgroundColor: '#3f3f3f'
    }
    return (
        <div style={changeBGColor} className="ui menu">
          <div className="right item">
            <div className="ui input">
              <input value={props.searchTerm}
              onChange={props.handleSearchChange}
              placeholder="Search by game title..."
              />
              <i className="search icon" id="magic"></i>
            </div>
          </div>
        </div>
    )
}
export default Search
