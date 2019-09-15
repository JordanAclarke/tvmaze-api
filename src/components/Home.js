import React, { Component } from 'react'
import data from '../SampleData'
import Results from './Results'
import Search from './Search'
import axios from 'axios'
export default class Home extends Component {
    state = {
        query: '',
        hasSearched: false,
        movies: []
        //  [
        //         {
        //           "name":"The Office",
        //           "image":"http://static.tvmaze.com/uploads/images/medium_portrait/85/213184.jpg"
        //         },
        //         {
        //           "name":"Radiant Office",
        //           "image":"http://static.tvmaze.com/uploads/images/medium_portrait/101/254702.jpg"
        //         },
        //         {
        //           "name":"The Office",
        //           "image":"http://static.tvmaze.com/uploads/images/medium_portrait/93/234802.jpg"
        //         },
        //         {
        //           "name":"Mr. Box Office",
        //           "image":"http://static.tvmaze.com/uploads/images/medium_portrait/97/244942.jpg"
        //         },
        //         {
        //           "name":"The Queen of Office",
        //           "image":"http://static.tvmaze.com/uploads/images/medium_portrait/58/146476.jpg"
        //         },
        //         {
        //           "name":"No Offence",
        //           "image":"http://static.tvmaze.com/uploads/images/medium_portrait/48/121682.jpg"
        //         },
        //         {
        //           "name":"Oficer",
        //           "image":"http://static.tvmaze.com/uploads/images/medium_portrait/29/73047.jpg"
        //         },
        //         {
        //           "name":"Trzeci oficer",
        //           "image":"http://static.tvmaze.com/uploads/images/medium_portrait/29/73053.jpg"
        //         },
        //         {
        //           "name":"Line Offline: Salaryman",
        //           "image":"http://static.tvmaze.com/uploads/images/medium_portrait/57/143508.jpg"
        //         },
        //         {
        //           "name":"Utenai Keikan","image":"http://static.tvmaze.com/uploads/images/medium_portrait/42/106093.jpg"
        //         }
        //       ]
        

    }

    //functions
    handleSearchChange = (event) => {
        const newSearch = event.target.value;
        this.setState({query: newSearch})
    }
     queryTVMazeAPI = (query) => {
        // fill url in with a URL based on the example at: 
        // https://www.tvmaze.com/api#show-search
        // replace a part of the example URL with the user input, which you can 
        // assume will be the parameter of this function, `query`
        
        const url = ` http://api.tvmaze.com/search/shows?q=${query}`
        return axios.get(url) //make sure to return something
             .then(response => {
                 console.log(response)
                 this.setState({movies: response.data})
                 this.setState({hasSearched: true})
                })
             
      }

    render() {


        
        return (
            <div>
                <h1>Tv Maze</h1>
                <h2>Discover Your Favorite Tv Show</h2>
                {
                    this.state.hasSearched
                    ?
                <Results 
                movies={this.state.movies}
                queryTVMazeAPI = {this.queryTVMazeAPI }
                />
                :
                <Search query={this.state.query}
                handleSearchChange={this.handleSearchChange}
                queryTVMazeAPI = {this.queryTVMazeAPI }
                />
                }
               <p>Copyright: Jordan C.</p>
            </div>
        )
    }
}
