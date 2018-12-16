import React, { Component } from 'react';
import { Route , Switch} from 'react-router-dom'
import Movielist from './Movielist'
import MovieDetails from './MovieDetails'

class App extends Component {
  render() {
    return (
      <section>
        <Switch>
     <Route exact path='/' component={Movielist}/>
     <Route path='/:photo_id' component={MovieDetails}/>
     </Switch>
      </section>
    );
  }
}

export default App;
