import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./materialize.css";

class Movielist extends React.Component {
  state = {
    photos: [],
    visiblePhotos: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(response => {
      console.log(response.data);
      this.setState({
        photos: response.data.slice(0, 20),
        visiblePhotos: response.data.slice(0, 20)
      });
    });
  }
  fiterPhotos = () => {
    const filterPhotoList = this.state.photos.filter(photo => {
      return photo.title.indexOf(this.filterText.value) !== -1;
    });
    this.setState({
      visiblePhotos: filterPhotoList
    });
  };
  render() {
    return (
      <section>
        <div className="row">
          <input
            type="text"
            onChange={this.fiterPhotos}
            ref={node => (this.filterText = node)}
            className="col s4 m4"
          />
          <button className="btn col s5 m2 ">Filter</button>
        </div>
        {this.state.visiblePhotos.map(photo => {
          return (
            <div className="row">
              <div key={photo.id} className="col s4 m4">
                <div className="card">
                  <div className="card-image">
                    <img
                      src={photo.thumbnailUrl}
                      alt="tayyab"
                      height="200px"
                      width="200px"
                    />
                    <span className="card-title">{photo.title}</span>
                  </div>

                  <div className="card-action">
                    <NavLink to={`/${photo.id}`}>This is a link</NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Movielist;
