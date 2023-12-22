import React from 'react'
import {Row, Col} from 'react-bootstrap'
import ListaCommenti from './ListaCommenti'
import AggiungiCommento from './AggiungiCommento'
// import CommentList from './CommentList'
// import AddComment from './AddComment'


class ZonaCommenti extends React.Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
          this.props.id,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcyZGYxYzBkOGEyMDAwMThhNDhiOTUiLCJpYXQiOjE3MDMyNTc2MTEsImV4cCI6MTcwNDQ2NzIxMX0.UMUz_ja-wJ7dA4iFbq7P1BGiG3ggWCw0ogbjZizsrDc',
          },
        }
      )
      console.log(response)
      if (response.ok) {
        let comments = await response.json()
        this.setState({ comments: comments, isLoading: false, isError: false })
      } else {
        console.log('error')
        this.setState({ isLoading: false, isError: true })
      }
    } catch (error) {
      console.log(error)
      this.setState({ isLoading: false, isError: true })
    }
  }

  render() {
    return (
      <div>
        <ListaCommenti commenti= {this.state.comments} />
        <AggiungiCommento asin= {this.props.id} />
      </div>
    )
  }
}

export default ZonaCommenti