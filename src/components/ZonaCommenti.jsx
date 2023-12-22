import React from 'react'
import {Row, Col} from 'react-bootstrap'
import ListaCommenti from './ListaCommenti'
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
          this.props.imdbID,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0MmJkMWI1MjViYjAwMThlZDA3YjAiLCJpYXQiOjE3MDMxNjA3ODUsImV4cCI6MTcwNDM3MDM4NX0.hPuw6zmzOPFeijuIZWkvyt-vMT8yAYe4u1mSHcgb0Qo',
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
        
      </div>
    )
  }
}

export default ZonaCommenti