import { Row, Col } from "react-bootstrap";
import Commento from "./Commento";

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
                            <Commento key={commento._id} commento = {commento} />
                        ))
                    )}
                </Row>
      </div>
    )
}

export default ListaCommenti