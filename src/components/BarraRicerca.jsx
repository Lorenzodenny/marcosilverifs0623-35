import React, { Component } from 'react';
import Film from './Film';
import { Col, Form, Row } from 'react-bootstrap';

class BarraRicerca extends Component {
  state = {
    searchQuery: '',
    films: [],
    isLoading: true,
    isError: false,
  };

  handleSearch = () => {
    this.fetchMovies();
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(`http://www.omdbapi.com/?apikey=6f0cbe59&s=${this.state.searchQuery}`);
      if (response.ok) {
        let films = await response.json();
        this.setState({ films: films.Search || [], isLoading: false, isError: false });
      } else {
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    let miniFilmsList = this.state.films || [];
    return (
      <>
        <Row className='barraSearch'>
          <Col>
            <Form.Group>
              <Form.Label>Search a Film</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
                onKeyDown={this.handleKeyDown}
                className='colorGrayX'
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="flex-nowrap overflow-x-scroll">
          {miniFilmsList.map((film, index) => (
            <Film key={index} film={film} />
          ))}
        </Row>
      </>
    );
  }
}

export default BarraRicerca;
