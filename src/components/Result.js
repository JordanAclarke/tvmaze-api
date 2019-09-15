import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Result extends Component {
    render() {
        return (
            <div>

                <h1>{this.props.name}</h1>
                {

                    this.props.image
                    ?
                <img src= {this.props.image.original}  alt="Movie Image"/>
                : null
                }
            </div>
        )
    }
}
