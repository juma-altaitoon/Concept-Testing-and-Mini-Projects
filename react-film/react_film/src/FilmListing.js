import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmListing extends Component {

  state = {
    filter : 'all',  
  }

handleFilterClick(filter) {
  
  this.setState({filter : filter})
  console.log(`Setting filter to ${filter}`)
  console.log(this.state.filter)
}  
  render() {
      // const allFilms = this.props.films.map((film, index) => (
      //     <FilmRow film = {film} key={film.id} />
      // ))
   
    const allFilms = this.props.films.map((film) => (      
      // console.log(this.props.faves.includes(film.title)), 
      // console.log(this.props.handleDetailsClick(film)),
      <FilmRow
        film={film}
        key={film.id}
        onFaveToggle={() => this.props.onFaveToggle(film) }
        handleDetailsClick= {() => this.props.onDetailsClick(film)} 
        isFave={this.props.faves.includes(film)}/>
    ))
    const favesFilms = this.props.faves.map((film) => (  
      // console.log(this.props.handleDetailsClick(film)),    
      <FilmRow
      film={film}
      key={film.id}
      onFaveToggle={() => this.props.onFaveToggle(film)}
      handleDetailsClick= {() => this.props.onDetailsClick(film)} 
      isFave={this.props.faves.includes(film)}/>
  ))      

    return (this.state.filter === 'faves') ? (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
            <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
                ALL
                <span className="section-count">{this.props.films.length}</span>
            </div>
            <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
                FAVES
                <span className="section-count">{this.props.faves.length}</span>
            </div>
        </div>
        
        {favesFilms}
      </div>
    ) : (
      <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
              ALL
              <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
              FAVES
              <span className="section-count">{this.props.faves.length}</span>
          </div>
      </div>
      
      {allFilms}
  </div>
  
    )
  }
}