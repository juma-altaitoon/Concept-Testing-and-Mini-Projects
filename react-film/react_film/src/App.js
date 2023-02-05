import React, { Component } from 'react'
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import './index.css'
import axios from 'axios'



export default class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      films: this.props.films,
      faves: [],
      current: {},
      isFave: false
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    // this.handleDetailsClick = this.handleDetailsClick.bind(this)
  }

  handleFaveToggle(film){
    const faves = this.state.faves
    const filmIndex = faves.indexOf(film)
    if (filmIndex >= 0){
        console.log(`Removing ${film.title} from faves..`)
        faves.splice(filmIndex, 1)
      }
    else{
      console.log(`Adding ${film.title} to faves...`)
      faves.push(film) 
    }
    this.setState({faves:faves})
  }
  handleDetailsClick = (film) =>{
  // handleDetailsClick(film) {
    
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos,images&language=en`
    
    axios({
      method: 'GET',
      url : url
    })
    .then(response => {
      console.log(response.data)
      console.log(`Fetching details for ${film.title}`)
      this.setState({current: response.data})
    })
    .catch(error =>{
      console.log(film)
      console.log(error)
    })
  }

  render() {
        
    // console.log(this.props)
    return (
      <div className='App'>
        <div className="film-library">
            <FilmListing films = {this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} onDetailsClick={this.handleDetailsClick} />
            <FilmDetails film = {this.state.current}/>
        </div>
      </div>
    );
  }
}
