import { Row, Col } from "react-bootstrap";

const ListaCommenti = (props) => {
    return(
        <div className="text-center">
        <Row>
                    {props.commenti.length === 0 ? (
                        <Col>
                            <p className='text-white'>Non ci sono commenti</p>
                        </Col>
                    ) : (
                        props.commenti.map((commento) => (
                            <Col>
                                <p className='text-white'>Commento: {commento.comment}</p>
                            </Col>
                        ))
                    )}
                </Row>
      </div>
    )
}

export default ListaCommenti