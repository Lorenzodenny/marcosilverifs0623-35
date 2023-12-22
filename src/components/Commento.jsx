import { Col, Button } from 'react-bootstrap'

const Commento = (props) => {


    const deleteComment = async (asin) => {
        try {
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments/" + asin,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcyZGYxYzBkOGEyMDAwMThhNDhiOTUiLCJpYXQiOjE3MDMyNTc2MTEsImV4cCI6MTcwNDQ2NzIxMX0.UMUz_ja-wJ7dA4iFbq7P1BGiG3ggWCw0ogbjZizsrDc',
                    },
                }
            );
            if (response.ok) {
                alert("Commento eliminato");
            } else {
                alert("Errore nella cancellazione");
            }
        } catch (err) {
            alert("Errore");
        }
    };


    return (
        <Col className="d-flex justify-content-between align-items-center my-3 ms-3 bg-recensione">
            <p className='text-white'>Recensione: {props.commento.comment}</p>
            <Button  className='redFire' onClick={() => deleteComment(props.commento._id)}>
                cancella
            </Button>
        </Col>
    )

}

export default Commento