import React from "react";
import { Col } from "react-bootstrap";
import ZonaCommenti from "./ZonaCommenti"

class Film extends React.Component{
    state = {
        selected: false,
    }

    render() {
    return(
        <Col className="altezza" >
            <div onClick={() => this.setState({selected: !this.state.selected})}>
                <img src={this.props.film.Poster} /></div>
            {this.state.selected && <ZonaCommenti id={this.props.film.imdbID} />}
        </Col>
    )}
}

export default Film;