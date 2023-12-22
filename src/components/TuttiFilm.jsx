import { Col, Row, Container } from 'react-bootstrap'
import ListaFilm from './ListaFilm'

const TuttiFilm = () => {
    return(

        
            <Container>
                <Row>
                    <Col xs={12}>
                        <ListaFilm category="http://www.omdbapi.com/?apikey=6f0cbe59&s=avengers" title="Avangers"/>
                        <ListaFilm category="http://www.omdbapi.com/?apikey=6f0cbe59&s=harry%20potter"title="Harry Potter" />
                        <ListaFilm category="http://www.omdbapi.com/?apikey=6f0cbe59&s=lord%20of%20the%20rings" title="Lord Of The Rings"/> 
                    </Col>
                </Row>
            </Container>
        
    )
}

export default TuttiFilm;