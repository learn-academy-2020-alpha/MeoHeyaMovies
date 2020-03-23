import React, { Component } from "react"

class Film extends Component {
    render() {
        // Accessing the id from the URL 
        const {id} = this.props.match.params
        // Using .find() to return the correct object from the data set
        //changing string into an integer with parseInt
        const film = this.props.films.find((film) => film.id === parseInt(id))

        return(
            <React.Fragment>
                <div>
                <h3>{ film.name }</h3>
                <p>{ film.descriptions }</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Film