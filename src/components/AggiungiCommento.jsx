import React from "react";
import { Button, Form } from "react-bootstrap";

class AggiungiCommento extends React.Component {
    state = {
        comment: {
            comment: "",
            rate: 1,
            elementId: this.props.asin,
        },
    };

    sendComment = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments",
                {
                    method: "POST",
                    body: JSON.stringify(this.state.comment),
                    headers: {
                        Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcyZGYxYzBkOGEyMDAwMThhNDhiOTUiLCJpYXQiOjE3MDMyNTc2MTEsImV4cCI6MTcwNDQ2NzIxMX0.UMUz_ja-wJ7dA4iFbq7P1BGiG3ggWCw0ogbjZizsrDc',
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.ok) {
                alert("Recensione inoltrata");
                this.setState({
                    comment: {
                        comment: "",
                        rate: 1,
                        elementId: this.props.asin,
                    },
                });
            } else {
                alert("Aiaaaaaa qualcosa è andato storto");
            }
        } catch (err) {
            console.log("Errore:", err);
            alert("Errore");
        }
    };

    render() {
        return (
            <div className="mb-3">
                <Form onSubmit={this.sendComment}>
                    <Form.Group>
                        <Form.Label className="text-white">Cosa ne pensi?</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Commento"
                            value={this.state.comment.comment}
                            onChange={(e) =>
                                this.setState({
                                    comment: {
                                        ...this.state.comment,
                                        comment: e.target.value,
                                    },
                                })
                            }
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="text-white">Voto da 1 a 5</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.comment.rate}
                            onChange={(e) =>
                                this.setState({
                                    comment: {
                                        ...this.state.comment,
                                        rate: e.target.value,
                                    },
                                })
                            }
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button className="mt-3" variant="primary" type="submit">
                        Invia
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AggiungiCommento;