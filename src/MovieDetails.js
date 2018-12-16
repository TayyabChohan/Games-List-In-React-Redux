import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


class MovieDetails extends React.Component{
state={
    movieDetails:{}
}
componentDidMount(){
    const {match}=this.props
    axios.get(`https://jsonplaceholder.typicode.com/photos/${match.params.photo_id}`).then((response)=>{
        this.setState({
        movieDetails:response.data
        })
    })
}


    render(){
        const {movieDetails}=this.state
        return(
            <div className='row'>
            <NavLink to='/'> Back to list</NavLink>
            <div className='container'  >
            <div key={movieDetails.id} className="col s4 m4">
              <div className="card">
                <div className="card-image">
                  <img src={movieDetails.thumbnailUrl} alt='tayyab' height='200px' width='200px' />
                  <span className="card-title">{movieDetails.title}</span>
                </div>
              </div>
            </div>
            </div>
            </div>
        )
    }

    
}
export default MovieDetails