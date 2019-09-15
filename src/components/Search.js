import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <input 
                type='text'
                size="35"
                name='name'
                placeholder='Tv Show Title'
                onChange={this.props.handleSearchChange}
                value = {this.props.query}
                />
                <button onClick={() => this.props.queryTVMazeAPI(this.props.query)}>Search</button>
    
            </div>
        )
    }
}
