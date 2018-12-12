import React, { Component } from 'react'
import { connect } from 'react-redux'
import GamesList from './GamesList'


 const action={

 }

 class GamesPage extends Component {
    
    
  render() {
    return (
      <div>
         <h1>Games List </h1>
         <GamesList Games={this.props.Games}/>
      </div>
    )
  }
 
  
}
function mapStateToProps(state){
    return{
        Games: state.Games }  }

GamesPage.propTypes={
    Games:React.PropTypes.arrayOf
}
export default connect( action , mapStateToProps)(GamesPage)