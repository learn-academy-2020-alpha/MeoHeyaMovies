import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"

import Kingdom from './pages/Kingdom';
import SpiritedAway from './pages/SpiritedAway';
import PrincessMononoke from './pages/PrincessMononoke';
import FightClub from './pages/FightClub';
import That70sShow from './pages/That70sShow';
import './App.css';



const App = () => {
  return(
    <Router>
      <h1>Heya and Meo's Favorite Movies/Shows</h1>
      <ul>
        <li><Link to="/kingdom/">Kingdom</Link></li>
        <li><Link to="/spiritedaway/">Spirited Away</Link></li>
        <li><Link to="/princessmononoke/">Princess Mononoke</Link></li>
        <li><Link to="/fightclub/">Fight Club</Link></li>
        <li><Link to="/that70sshow/">That 70s Show</Link></li>
      </ul>

      <br/>
      <p>
      </p>
      <Switch>
        <Route path="/kingdom/" component={ Kingdom } />
        <Route path="/spiritedaway/" component={ SpiritedAway } />
        <Route path="/princessmononoke/" component={ PrincessMononoke } />
        <Route path="/fightclub/" component={ FightClub } />
        <Route path="/that70sshow/" component={ That70sShow } />
      </Switch>
    </Router>
  )
}

export default App;
