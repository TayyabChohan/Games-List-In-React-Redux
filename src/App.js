import React, { Component } from 'react';
import GamesPage from './GamesPage'
import './App.css';
import { Link , Route} from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div>

             <Link to='Games'>Games</Link>
          
          <Route path="/Games" component={GamesPage}/>
      
      </div>
    );
  }
}

export default App;
