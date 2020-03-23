import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"
import movieshows from './store/movieshows'
import Film from './Film.js'
import NotFound from './pages/NotFound';
import './App.css';



class App extends Component {
  constructor() {
    super()
    this.state = {
      films: movieshows
    }

  }
  render() {
  return(
    <Router>
      <h1>Heya and Meo's Favorite Movies/Shows</h1>
      <ul>
      { this.state.films.map((film, index) =>
                <li key={ index }>
                  <Link to={ `/films/${film.id}` }>
                    { film.name }
                  </Link>
                </li>        
      )}
      </ul>

      <br/>
      <p>
      </p>
      <Switch>
        <Route
          path="/films/:id"
          render={ (props) => <Film {...props} films={ this.state.films } /> }
          />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  )
  }
}

export default App;
