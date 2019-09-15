import React, { Component } from 'react'
import Result from './Result'
export default class Results extends Component {
    render() {
        let results = this.props.movies.map((movie, index) => {

        return (
            <div>
                
                <Result 
                name={movie.show.name}
                image={movie.show.image}
                key={index}
                />
                
            </div>
        )
    })
        return (
            <div>
                {results}
            </div>
        )
        
    }
}
