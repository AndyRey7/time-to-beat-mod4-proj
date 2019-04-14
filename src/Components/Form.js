import React from 'react'

export default class Form extends React.Component {

    state = {
        title: '',
        genre: 'Action',
        imgURL: '',
        hours: 0
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form className="ui equal width form" onSubmit={(e) => this.props.addNewGameToList(e, this.state)}>
                <div className="fields">
                    <div className="field">
                        <label>Game Title</label>
                        <input name="title" placeholder="enter game title" value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div className="field">
                        <label>Hours taken to beat</label>
                        <input name="hours" placeholder="enter hours to beat" value={this.state.hours} onChange={this.handleChange} />
                    </div>
                    <div className="field">
                        <label>ImageURL</label>
                        <input name="imgURL" placeholder="enter game image" value={this.state.imgURL} onChange={this.handleChange} />
                    </div>
                    <div className="field">
                        <label>Genre</label>
                        <select name="genre" onChange={this.handleChange}>
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
                </div>
                <button class="ui animated button" type="submit">
                    <div class="visible content">Add New Game</div>
                    <div class="hidden content">
                        <i class="right arrow icon"></i>
                    </div>
                </button>

                </form>
        )
    }
}
